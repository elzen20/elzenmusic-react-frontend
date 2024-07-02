import { Toast, ToastContainer } from "react-bootstrap";

function Toaster(props) {
  return (
    <ToastContainer  position="bottom-center">
      <Toast bg={props.bg} show={props.show}  onClose={props.onClose} autohide delay={5000}>
        <Toast.Header>
          <strong className="me-auto">{props.title}</strong>
          <small className="text-muted">{props.subtitle}</small>
        </Toast.Header>
        <Toast.Body>{props.body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;
