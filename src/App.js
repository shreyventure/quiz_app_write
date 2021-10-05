import Header from "./components/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import QuizCard from "./components/QuizCard";
import Footer from "./components/Footer";
import { useState } from "react";
import Start from "./components/Start";
import api from "./API/api";

function App() {
  const [start, setStart] = useState(false);
  const changeStart = () => {
    setStart(!start);
  };
  api.provider();
  const data = [
    {
      question:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente tempora autem saepe eum laudantium voluptatem porro magnam velit amet. Animi pariatur facilis officia! Esse possimus culpa exercitationem in unde sit.",
      answer: "",
    },
    { question: "Yoo!", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
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
            />
          ) : (
            <p>End!</p>
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
