import Header from "./components/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import QuizCard from "./components/QuizCard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Start from "./components/Start";
import api from "./API/api";
import Server from "./utils/config";

function App() {
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);
  const changeStart = () => {
    setStart(!start);
  };
  useEffect(() => {
    const getlist = async () => {
      const ret = await api.listDocuments(Server.questions_collectionID);
      setData(ret.documents);
    };
    getlist();
  }, []);

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
