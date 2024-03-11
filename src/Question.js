import RadioButton from "./Utility/RadioButton";

const Question = ({ currentQuestion, passOptionChange }) => {
  return (
    <>
      <div key={currentQuestion?.id} className={`mb-8}`}>
        <p className="text-lg font-semibold mb-2">
          {currentQuestion?.question}
        </p>
        <div className="flex flex-col space-y-2">
          {currentQuestion?.options.map((option) => (
            <RadioButton option={option} passOptionChange={passOptionChange} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
