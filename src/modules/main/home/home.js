import Footer from "../../footer/footer";
import Header from "../../header/header";
import Contact from "../contact/contact";
import Profile from "../profile/profile";
import Projects from "../projects/projects";
import { Route, Routes } from 'react-router-dom';
import "./home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
          {/* Define the routes for different pages */}
          <Route path="/" element={
            <>
              {/* Profile Section */}
              <Profile />
              {/* Projects Section */}
              <Projects />

              {/* Contact Section */}
              <Contact />
            </>
          } />
          {/* Blog Page Route */}
          <Route path="/blog" element={<blog />} />
        </Routes>

      <Footer/>
    </div>
  );
};

export default Home;
