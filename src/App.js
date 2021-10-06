import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import QuizCard from "./components/QuizCard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Start from "./components/Start";
import api from "./API/api";
import Server from "./utils/config";
import Score from "./components/Score";
import About from "./components/About";

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

  const reset = () => {
    setIdx(0);
    setScore(0);
  };

  return (
    <Router>
      <div
        style={{ height: "100vh", backgroundColor: "#4F0C82", padding: "0" }}
      >
        <Header />
        <Container style={{ height: "81%" }} className="d-lg-flex p-4  w-100">
          <Switch>
            <Route exact path="/">
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
                  <div className="w-100 h-100 text-center pb-5">
                    <div className="w-100 h-100 text-center d-flex align-items-center">
                      <Score value={score} maxValue={totalQuestions} />
                    </div>
                    <Button onClick={() => reset()} className="lead">
                      Play again
                    </Button>
                  </div>
                )
              ) : (
                <Start changeStart={changeStart} />
              )}
            </Route>
            <Route exact path="/about" component={About} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
