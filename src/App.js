import EightBall from "./EightBall.js";
import answers from "./answers";

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
