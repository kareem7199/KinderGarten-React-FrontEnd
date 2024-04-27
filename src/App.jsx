import Routes from "./routes/index.routes"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  // console.log = _ => 1;
  
  return (
    <div>
      <ToastContainer />
      <Routes />
    </div>
  )
}

export default App
