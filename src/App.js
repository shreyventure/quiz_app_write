import Header from "./components/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import QuizCard from "./components/QuizCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#4F0C82" }}>
      <Header />
      <Container style={{ height: "80%" }} className="d-lg-flex p-4  w-100">
        <QuizCard />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
