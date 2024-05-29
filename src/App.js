import items from "./menu";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";


function App(props) {
  const { children } = props;
  
  return (
    <div>
      <Header items={items}></Header>
      <Content body={children}></Content>
      <Footer items={items}></Footer>
    </div>
  );
}

export default App;
