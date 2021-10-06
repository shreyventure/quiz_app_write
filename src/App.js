import Header from "./components/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import QuizCard from "./components/QuizCard";
import Footer from "./components/Footer";
import { useState } from "react";
import Start from "./components/Start";

function App() {
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const changeStart = () => {
    setStart(!start);
  };
  const data = [
    {
      question: "Which of the following is not an OOPS concept?",
      options: ["Encapsulation", "Polymorphism", "Exception", "Abstraction"],
      answer: "Exception",
    },
    { question: "Yoo!", options: [], answer: "" },
    { question: "", options: [], answer: "" },
    { question: "", options: [], answer: "" },
  ];
  const totalQuestions = data.length;
  const [idx, setIdx] = useState(0);

  const incrementIdx = (para) => {
    setIdx(para);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "#4F0C82", padding: "0" }}>
      <Header />
      <Container style={{ height: "81%" }} className="d-lg-flex p-4  w-100">
        {start ? (
          idx < totalQuestions ? (
            <QuizCard
              data={data}
              totalQuestions={totalQuestions}
              idx={idx}
              incrementIdx={incrementIdx}
              score={score}
              setScore={setScore}
            />
          ) : (
            <p>Score: {score}</p>
          )
        ) : (
          <Start changeStart={changeStart} />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
