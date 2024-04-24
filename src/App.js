import items from "./menu";
import Header from "./layout/Header";
import Content from "./layout/Content";


function App(props) {
  const { children } = props;
  
  return (
    <div>
      <Header items={items}></Header>
      <Content body={children}></Content>
    </div>
  );
}

export default App;
