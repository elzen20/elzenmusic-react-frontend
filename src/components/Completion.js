import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { selectRequest, cleaningRequestedTabs } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Completion() {
  const request = useSelector(selectRequest);
  const dispatch = useDispatch();
  useEffect(() => {
    const initiateDownload = async () => {
      try {
        const response = await fetch("/download-pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        });
        if (!response.ok) {
          throw new Error("Error al iniciar la descarga del PDF");
        }
        // Obtener el nombre del archivo del encabezado Content-Disposition
        const contentDisposition = response.headers.get("Content-Disposition");
        let filename = contentDisposition.split("filename=")[1];
        // Eliminar guiones bajos al principio y al final del nombre del archivo
        filename = filename.replace(/^"|"$/g, ""); // Eliminar comillas al principio y al final
        filename = filename.replace(/^_+|_+$/g, "");
        // Convertir la respuesta en un objeto Blob
        const blob = await response.blob();
        // Crear un enlace para descargar el archivo
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename; // Nombre del archivo
        document.body.appendChild(a);
        a.click();
        dispatch(cleaningRequestedTabs())
        // Liberar el objeto URL creado
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error(error);
      }
    };

    initiateDownload();
  }, [request, dispatch]);

  return (
    <Container className="my-5 text-align">
      <h1>¡Gracias por su compra! 🎉🎸</h1>
      <span className="m-5">Sus tablaturas han sido enviadas a su correo. Addicionalmente se tuvo que haber descargado un zip con sus tablaturas desde su navegador</span>
    </Container>
  );
}

export default Completion;
