import { Card, Button } from "react-bootstrap";

const QuizCard = () => {
  return (
    <Card
      className="border-info h-100 w-100"
      style={{ borderRadius: "20px" }}
      bg="dark"
      variant="light"
    >
      <Card.Header className="border-primary" as="h3">
        Q. {}
      </Card.Header>
      <Card.Body>
        <Card.Text></Card.Text>
        <Button variant="primary">Next</Button>
      </Card.Body>
    </Card>
  );
};

export default QuizCard;
