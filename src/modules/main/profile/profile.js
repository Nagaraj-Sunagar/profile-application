import React from 'react';
import './profile.css'; // Importing the CSS for styling

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-image-section">
          <img src="https://photos.google.com/photo/AF1QipNHsukwc14dIxqAUG_xRM8G3ANjBC4cVLQFUftz" alt="Nagaraj Sunagar" className="profile-photo" />
          <div className="profile-info">
            <h2>Nagaraj Sunagar</h2>
            <p>Software Engineer I at JP Morgan Chase and Co.</p>
            <p>Alumnus of BMS College of Engineering</p>
          </div>
        </div>
        <div className="profile-introduction">
          <h2>About Me</h2>
          <p>
            Hey, I'm Nagaraj Sunagar, a passionate software developer with experience in problem solving and building
            modern applications. I love working with Java, JavaScript, React and other technologies. Currently, 
            I am a Java Developer at JP Morgan Chase and Co. , where I am focused on developing LoanIQ Application.
          </p>
          <p>
            In my free time, I enjoy contributing to open-source projects, learning new 
            technologies, and exploring new places.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
