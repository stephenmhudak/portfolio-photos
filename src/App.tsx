import "./App.css";
import Button from "./components/base/Button.tsx";

function App() {
  return (
    <div className="px-8 py-4 text-center">
    <Button color="primary" onClick={() => alert("Hello, World!")}>
      Click Me
    </Button>
    </div>
  );
}

export default App;
