import items from "./menu";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import { useLocation } from "react-router-dom";


function App(props) {
  const { children } = props;
  const location = useLocation();
  const hideLayout =
    location.pathname === "/" || location.pathname === "/spotify-gate";
  
  return (
    <div>
      {!hideLayout ? <Header items={items}></Header> : null}
      <Content body={children}></Content>
      {!hideLayout ? <Footer items={items}></Footer> : null}
    </div>
  );
}

export default App;
