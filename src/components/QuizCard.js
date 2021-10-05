import { Card, Button } from "react-bootstrap";

const QuizCard = ({ data, totalQuestions, idx, incrementIdx }) => {
  return (
    <Card
      className="border-info h-100 w-100"
      style={{ borderRadius: "20px" }}
      bg="dark"
      variant="light"
    >
      <Card.Header className="border-primary" as="h3">
        Q. {data[idx].question}
      </Card.Header>
      <Card.Body>
        <Card.Text></Card.Text>
        <div className="" style={{ minHeight: "85%", maxHeight: "85%" }}></div>
        <div className="d-flex justify-content-between px-3">
          <Button
            variant="primary"
            onClick={() => {
              incrementIdx(idx + 1);
            }}
          >
            Next
          </Button>
          <Button
            className="mx-2"
            variant="danger"
            onClick={() => {
              incrementIdx(totalQuestions);
            }}
          >
            Quit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
