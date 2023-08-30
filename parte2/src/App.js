import './App.css';
import Message from './message';

const Descripcion = ()=>{
  return <h1>App curso de ReactJS</h1>
}
function App() {
  return (
    <div className="App">
      <Descripcion/>
      <Message color="red" message="Tirando codigo"/>
      <Message color="blue" message="ReactJS"/>
   </div>
  );
}

export default App;
