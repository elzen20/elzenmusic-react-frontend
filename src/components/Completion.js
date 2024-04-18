import { Container } from "react-bootstrap";
import { useEffect } from "react";
function Completion() {
  useEffect(() => {
    const initiateDownload = async () => {
      try {
        const response = await fetch('/download-pdf');
        if (!response.ok) {
          throw new Error('Error al iniciar la descarga del PDF');
        }


        // Convertir la respuesta en un objeto Blob
        const blob = await response.blob();

        // Crear un enlace para descargar el archivo
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ELZENPRESSKIT.pdf'; // Nombre del archivo
        document.body.appendChild(a);
        a.click();

        // Liberar el objeto URL creado
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error al descargar el PDF:', error);
        throw error;
      }
    };

    initiateDownload();
  }, []);
  return (
  <Container className="my-5 text-align">
    <h1>Gracias por su compra! 🎉</h1>
  </Container>
)
}

export default Completion;
