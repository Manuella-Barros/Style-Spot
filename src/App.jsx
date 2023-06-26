// JSX => JUNTA HTML COM JAVASCRIPT
import Navbar from "./componentes/navbar/navbar";
import Home from "./pages/home/home";
import Listagem from "./pages/listagem/listagem";

// Todo componente só pode retornar uma coisa, então usa uma tag vazia (<>) para retornar + de 1 elemento 
//essa tag vazia se chama <React.Fragment>
import { Route, Routes, BrowserRouter } from "react-router-dom";//padrão pra usar o router

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/> 
        <Route path="/produtos/*" element={<Listagem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App