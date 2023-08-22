import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layouts";
import Bai1 from "./component/bai1/bai1";
import Bai2 from "./component/bai2/bai2";
import Bai3 from "./component/bai3/bai3";
import Bai4 from "./component/bai4/bai4";
import Bai5 from "./component/bai5/bai5";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="bai1" element={<Bai1 />}></Route>
          <Route path="bai2" element={<Bai2 />}></Route>
          <Route path="bai3" element={<Bai3 />}></Route>
          <Route path="bai4" element={<Bai4 />}></Route>
          <Route path="bai5" element={<Bai5 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
