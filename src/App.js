import items from "./menu";
import Header from "./layout/header";
import Content from "./layout/content";


function App(props) {
  const { children } = props;
  console.log()
  
  return (
    <div>
      <Header items={items}></Header>
      <Content body={children}></Content>
    </div>
  );
}

export default App;
