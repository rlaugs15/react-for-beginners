import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './routers/Detail';
import Home from "./routers/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
