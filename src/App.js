import Home from "./components/Home"
import FormPage from "./components/FormPage";
import {login} from "./controller/login"
import {signup} from "./controller/signup"
import { Route, Routes, BrowserRouter, } from "react-router-dom";
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/login"} element={<FormPage fun={login} btn={"Login"} message={"Don't have an account?"}/>} />
        <Route path={"/signup"} element={<FormPage fun={signup} btn={"SignUp"} message={"Already have an account?"}/>}/>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
