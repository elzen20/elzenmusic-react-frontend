import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { selectRequestedTabs, selectRequest } from "../features/counter/counterSlice";
import { useSelector } from "react-redux";

function Completion() {
  const request = useSelector(selectRequest);

  useEffect(() => {
    const initiateDownload = async () => {
      try {
        const response = await fetch('/download-pdf', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(request),
        });

        if (!response.ok) {
          throw new Error('Error al iniciar la descarga del PDF');
        }

        // Obtener el nombre del archivo del encabezado Content-Disposition
        const contentDisposition = response.headers.get('Content-Disposition');
        console.log("contentDisposition: ", contentDisposition)
        let filename = contentDisposition.split('filename=')[1];
        console.log("filename: ", filename)
        // Eliminar guiones bajos al principio y al final del nombre del archivo
        filename = filename.replace(/^"|"$/g, ''); // Eliminar comillas al principio y al final
        filename = filename.replace(/^_+|_+$/g, '');
        console.log("filename: ", filename)

        // Convertir la respuesta en un objeto Blob
        const blob = await response.blob();

        // Crear un enlace para descargar el archivo
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename; // Nombre del archivo
        document.body.appendChild(a);
        a.click();
        console.log("a: ", a)


        // Liberar el objeto URL creado
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error al descargar el PDF:', error);
        console.error(error);
      }
    };

    initiateDownload();
  }, []);

  return (
    <Container className="my-5 text-align">
      <h1>¡Gracias por su compra! 🎉</h1>
    </Container>
  );
}

export default Completion;
