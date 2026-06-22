import "./App.css";
import { useState } from "react";
import Button from "./components/base/Button.tsx";
import Input from "./components/base/Input.tsx";
import Carousel from "./components/Carousel.tsx";

function App() {
    const [name, setName] = useState("");
  return (
    <div className="px-8 py-4 text-center">
        <Button onClick={() => alert("Hello, World!")}>
            Click Me
        </Button>
        <Input className="block w-full mt-4" onChange={(e) => setName(e.target.value)} value={name} type="date" />
        <Carousel />
    </div>
  );
}

export default App;
