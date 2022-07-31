import Navbar from "./component/Navbar";
import NewsMenu from "./component/NewsMenu";
import{BrowserRouter, Routes,Route} from "react-router-dom"




function App() {
  return (
   <>
   <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route path="/general" element={<NewsMenu key="general" category="general"/>}/>
            <Route path="/entertainment" element={<NewsMenu key="entertainment" category="entertainment"/>}/>
            <Route path="/business" element={<NewsMenu key="business" category="business"/>}/>
            <Route path="/sport" element={<NewsMenu key="sport" category="sport"/>}/>
            <Route path="/science" element={<NewsMenu key="science" category="science"/>}/>
            <Route path="/technology" element={<NewsMenu key="technology" category="technology"/>}/>

         </Routes>
   </BrowserRouter>
   

   
   </>
  );
}

export default App;
