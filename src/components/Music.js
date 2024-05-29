
import Container from "react-bootstrap/Container";
function Music () {

    return (
      <div className="text-align">
        <Container>
        <h1 >Music/Videos </h1>
        <iframe title="Elzen Music" src="https://open.spotify.com/embed/artist/786LaXEMjTkduykfZsmbox?utm_source=generator&theme=0" className="w-75 h-75"  allowtransparency="true" allow="encrypted-media"></iframe>
        </Container>
        
        
      </div>
    );
  
}

export default Music;