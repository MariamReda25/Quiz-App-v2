import { createContext, useContext, useEffect, useReducer } from "react";
const QuizContext = createContext();
const initialState = {
  quiz: [],
  status: "loading",
  title: "",
  icon: "",
  questions: [],
  currentQuestion: 0,
  answer: null,
  selectedOption: null,
  score: 0,
  theme: "light",
  message: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "data/recieve":
      return { ...state, quiz: action.payload, status: "ready" };
    case "subject/select":
      const { title, icon, questions } = action.payload;
      return {
        ...state,
        status: "start",
        questions,
        title,
        icon,
      };
    case "option/select":
      return { ...state, selectedOption: action.payload };

    case "btn/submit":
      return {
        ...state,
        answer: state.selectedOption,
      };
    case "btn/next":
      const numOfQuestions = state.questions.length - 1;
      if (state.currentQuestion < numOfQuestions)
        return {
          ...state,
          score:
            state.questions[state.currentQuestion].answer === state.answer
              ? state.score + 1
              : state.score,
          answer: null,
          selectedOption: null,
          currentQuestion: state.currentQuestion + 1,
        };
      return { ...state, status: "finish" };

    case "btn/error":
      return { ...state };

    case "again":
      return {
        ...state,
        status: "ready",
        title: "",
        icon: "",
        subject: {},
        questions: [],
        currentQuestion: 0,
        answer: null,
        selectedOption: null,
        score: 0,
      };

    case "theme/toggle":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "error":
      return { ...state, status: "error", message: action.payload };
    default:
      return state;
  }
}

function QuizProvider({ children }) {
  const [
    {
      title,
      icon,
      status,
      quiz,
      questions,
      currentQuestion,
      answer,
      selectedOption,
      score,
      theme,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length;

  useEffect(function () {
    async function fetchQuiz() {
      try {
        const res = await fetch("http://localhost:9000/quizzes");
        if (!res.ok) throw new Error(`Faild to fetch Quiz ${res.status}`);
        const data = await res.json();
        dispatch({ type: "data/recieve", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });
      }
    }
    fetchQuiz();
  }, []);

  useEffect(
    function () {
      if (theme === "dark") document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    },
    [theme]
  );

  function handleSubmit() {
    if (selectedOption && !answer) dispatch({ type: "btn/submit" });
    else if (selectedOption && answer) dispatch({ type: "btn/next" });
    else dispatch({ type: "btn/error" });
  }

  return (
    <QuizContext.Provider
      value={{
        title,
        icon,
        status,
        quiz,
        questions,
        currentQuestion,
        answer,
        selectedOption,
        score,
        theme,
        message,
        numOfQuestions,
        dispatch,
        handleSubmit,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("You consume Context in wrong place");
  return context;
}
export { useQuiz, QuizProvider };
