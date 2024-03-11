import { useEffect, useState } from "react";
import Question from "./Question";
import ProgressBar from "./Utility/ProgressBar";

const QuizCompitation = () => {
  const questionBank = [
    {
      id: 1,
      question: "What does JSX stand for in React?",
      options: [
        "JavaScript XML",
        "Extended Style Sheets",
        "JSON XML",
        "Java Syntax Extension",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      id: 2,
      question: "In React, what is the purpose of the useState hook?",
      options: [
        "To fetch data from an API",
        "To manage state in functional components",
        "To handle routing in applications",
        "To define global variables",
      ],
      correctAnswer: "To manage state in functional components",
    },
    {
      id: 3,
      question: "What is the role of props in React?",
      options: [
        "To style components",
        "To manage component state",
        "To pass data between components",
        "To define component structure",
      ],
      correctAnswer: "To pass data between components",
    },
    {
      id: 4,
      question: "How can you conditionally render content in React?",
      options: [
        "Using the if-else statement",
        "Using the switch statement",
        "Using the ternary operator",
        "React does not support conditional rendering",
      ],
      correctAnswer: "Using the ternary operator",
    },
    {
      id: 5,
      question: "What is the purpose of the useEffect hook in React?",
      options: [
        "To fetch data from an API",
        "To manage component state",
        "To perform side effects in functional components",
        "To define global variables",
      ],
      correctAnswer: "To perform side effects in functional components",
    },
  ];

  const [count, setCount] = useState(60);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }

      if (question <= questionBank.length && count === 0) {
        setQuestion((question) => question + 1);
        if (question !== question.length) {
          setCount(60);
        }
      }

      if (question >= questionBank.length) {
        setCount(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  const handleOptionChange = (answer) => {
    if (question <= questionBank.length) {
      console.log(answer);
      if (currentQuestion.correctAnswer === answer) {
        setScore((prevRight) => prevRight + 1);
      }
      setCount(60);
      setQuestion(question + 1);
    } else if (question > question.length) {
    }
  };

  const progressBarWidth = `${(count / 60) * 100}%`; // Calculate width for progress bar
  const currentQuestion = questionBank[question];
  return (
    <>
      <div className="container mx-auto">
        {questionBank.length <= question ? (
          <div className="text-center text-black"> Score is {score}</div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quiz competition</h2>
            <ProgressBar progressBarWidth={progressBarWidth} />
            <Question
              currentQuestion={currentQuestion}
              passOptionChange={handleOptionChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default QuizCompitation;
