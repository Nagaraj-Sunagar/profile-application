import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./modules/main/home/home";
import Blog from "./modules/main/blogs/blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog" element={<Blog />}/>
          {/* <Route path="blogs" element={<Blogs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
