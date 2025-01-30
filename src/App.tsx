import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto max-w-screen-sm sm:max-w-screen-md xl:max-w-screen-xl">
      <Header />
      <Form />
    </div>
  );
}

export default App;
