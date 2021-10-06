import { Alert } from "react-bootstrap";

function AlertBar({ show, showMsg }) {
  if (show) {
    return (
      <Alert
        variant="danger"
        onClose={() => {
          showMsg(false);
        }}
        dismissible
      >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Please login to play the quiz.</p>
      </Alert>
    );
  }
  return null;
}
export default AlertBar;
