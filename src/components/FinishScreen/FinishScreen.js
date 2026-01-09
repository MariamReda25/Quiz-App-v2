import Score from "../Score/Score";

function FinishScreen() {
  return (
    <>
      <div>
        <h1 className="heading-primary">Quiz Completed </h1>
        <h1 className="heading-primary bold mb-medium">You Scored... </h1>
      </div>
      <Score />
    </>
  );
}

export default FinishScreen;
