import { Routes, Route } from 'react-router-dom';
import Detail from './routers/Detail';
import Home from "./routers/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  )
}

export default App;
