const ProgressBar = ({progressBarWidth}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-1">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: progressBarWidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;
