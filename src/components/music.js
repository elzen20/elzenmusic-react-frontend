
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
function Music () {

    return (
      <div className="text-align">
        <Container>
        <h1 >Music/Videos </h1>
        <iframe title="Elzen Music" src="https://open.spotify.com/embed/artist/786LaXEMjTkduykfZsmbox?utm_source=generator&theme=0" width="700" height="400"  allowtransparency="true" allow="encrypted-media"></iframe>
        </Container>
        
        
      </div>
    );
  
}

export default Music;