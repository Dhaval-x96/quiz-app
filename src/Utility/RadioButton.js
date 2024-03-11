const RadioButton = ({ option, passOptionChange }) => {
  return (
    <>
      <label
        key={option}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <input
          type="radio"
          value={option}
          onChange={() => passOptionChange(option)}
          className="appearance-none w-4 h-4 border border-gray-300 checked:bg-blue-500 checked:border-transparent"
        />
        <span className="relative">
          <svg
            className={`w-3 h-3 absolute top-0 left-0 text-white ${"opacity-100"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span>{option}</span>
      </label>
    </>
  );
};

export default RadioButton;
