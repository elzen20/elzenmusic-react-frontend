import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Toaster from "./Toaster";

function EmailForm() {
  const [toasterTitle, setToasterTitle] = useState("");
  const [toasterSubtitle, setToasterSubtitle] = useState("");
  const [toasterBody, setToasterBody] = useState("");
  const [toasterShow, setToasterShow] = useState(false);
  const [ backgroundColor, setBackgroundColor ] =useState("")

  function handleToaster(title, subtitle, body, bg) {
    setToasterTitle(title);
    setToasterBody(body);
    setToasterSubtitle(subtitle);
    setToasterShow(true);
    setBackgroundColor(bg)
  }

  const hideToaster = () => setToasterShow(false);
  return (
    <>
      <Formik
        initialValues={{ email: "", message: "", name: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          name: Yup.string().required("Name is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={async (values) => {
          // Aquí puedes manejar la lógica para enviar el formulario
          try {
            const response = await fetch(
              `/api/contact`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );
            if (!response.ok) {
              handleToaster("Algo salió mal", "Hubo algún error", "Lo sentimos mucho", "danger")
            } else {
              handleToaster("Mensaje Enviado", "Gracias por contactarnos", "Su mensaje fue enviado con éxito" , "success")
            }
          } catch (error) {
            console.error(error);
            handleToaster("Algo salió mal", "Hubo algún error", error, "danger")
          }
        }}
      >
        {(formik) => (
          <Form
            className="bg-light-gold m-auto text-start my-3"
            onSubmit={formik.handleSubmit}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-purple font-weight-bold">
                Correo:
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@ejemplo.com"
                {...formik.getFieldProps("email")}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="text-purple font-weight-bold">
                Nombre
              </Form.Label>
              <Form.Control
                type="name"
                placeholder="Elzen Music"
                {...formik.getFieldProps("name")}
                isInvalid={formik.touched.name && formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-purple font-weight-bold">
                Mensaje
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...formik.getFieldProps("message")}
                isInvalid={formik.touched.message && formik.errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="inverted-outline-purple"
              type="submit"
              disabled={!formik.isValid || !formik.dirty}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
      <Toaster
        title={toasterTitle}
        subtitle={toasterSubtitle}
        body={toasterBody}
        show={toasterShow}
        onClose={hideToaster} // Pasando la función hideToaster al componente hijo
        bg={backgroundColor}
      />
    </>
  );
}

export default EmailForm;
