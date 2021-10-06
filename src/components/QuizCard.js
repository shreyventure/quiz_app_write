import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const QuizCard = ({
  data,
  totalQuestions,
  idx,
  incrementIdx,
  score,
  setScore,
}) => {
  const [answer, setAnswer] = useState(null);
  const [style, setStyle] = useState("info");
  return (
    <Card
      className={`border-${style} h-100 w-100`}
      style={{ borderRadius: "20px" }}
      bg="dark"
      variant="light"
    >
      <Card.Header className="border-primary" as="h3">
        Q. {data[idx].question}
      </Card.Header>
      <Card.Body>
        <Card.Text></Card.Text>
        <div style={{ minHeight: "80%", maxHeight: "80%", fontSize: "20px" }}>
          {data[idx].options.map((opt, id) => (
            <Form.Check
              className="my-3"
              onChange={(e) => setAnswer(e.target.value)}
              checked={answer === opt}
              size="xl"
              key={id}
              type="radio"
              id={`default-radio-` + id}
              label={opt}
              value={opt}
              name={"option"}
            />
          ))}
        </div>
        <div className="d-flex justify-content-between px-3">
          <Button
            variant="primary"
            onClick={() => {
              if (data[idx].answer === answer) {
                setScore(score + 1);
                setStyle("success");
              } else {
                setStyle("danger");
              }
              setTimeout(() => {
                incrementIdx(idx + 1);
                setStyle("info");
                setAnswer(null);
              }, 2000);
            }}
          >
            Next
          </Button>
          <Button
            className="mx-2"
            variant="danger"
            onClick={() => incrementIdx(totalQuestions)}
          >
            Quit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
