import Fetch from "./Components/Fetch";
import Navbar from "./Components/Navbar";
import DataBase from "./Components/DataBase";
import { Routes, Route } from "react-router-dom";
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'


function App() {
  return (
   <div> 
    <Navbar />
    <Routes>
      <Route path='/' element={<Fetch /> }  />
      <Route path='/Data' element={<DataBase /> }  />
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='/page3' element={<Page3 />} />
      <Route path='/page4' element={<Page4 />} />
     </Routes>
    </div>
  );
}

export default App;
