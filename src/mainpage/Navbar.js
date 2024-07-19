import React from "react";
import posterdown from "..";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import XIcon from '@mui/icons-material/X';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./navbar.css";

const Navbar = (props) => {
  const data = props.data;

  return (
    <div className="nav-container">
      {/* <p>{JSON.stringify(props.data)}</p> */}
      <div className="nav-bar">
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#about">Ticket</a>
        </div>
        <div>
        
          <a href="#speaker-section">This is speaker section</a>
        </div>
        <div>
          <a href="#workshop-section">This is workshop section</a>
        </div>
        <div>
        
          <a href="#sponser">This is event sponser</a>
        </div>
      </div>
      <hr />

      {/* About section */}
      <h3 className="about-event" id="about">
        About Event
      </h3>
      <div>
       <p> This is the description of an event. This event was created as an
        evaluation task for the role of <b>Frontend Engineer</b>. Are you the
        one we are looking for? Don't get nervous. Take help if you need. Ask us
        more questions if you did not understand the problem. You can reach us
        out at reachus@konfhub.com.
        </p>
        
        
      <div>
        <img
          src={data?.event_poster_url}
          alt="Event Poster pic not found"
          height={300}
          width={300}
        />
      </div>

        <table style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>

        {/* Ticket section  */}
        <div>
          <h3 className="about-event">Ticket</h3>

          <div className="ticket-container">
            <h2>Free Ticket</h2>
            <p>
              This is a ticket description. This is a free ticket. This ticket
              is uncategorised.
            </p>
            <a
              href="https://www.google.com/maps?q=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
              target="_blank"
              rel="noopener noreferrer"
            >
              KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru,
              Karnataka, India
            </a>
            <p>This is additional venue details.</p>
            <div className="availability">
              <span>Available Till: 31st Aug 2034, 06:00 PM IST</span>
            </div>
            <div className="ticket-button">
            <div><h3>FREE</h3></div>
            <button className="register-button">Register</button>
            </div>
          
          </div>
        </div>
        


        {/* speaker section */}
        <div>
        <h3 className="about-event" id="about">
       {data?.speaker_section_title}
      </h3>
       <p>This is the description for speakers section</p>

       {/* <div style={{marginTop:"30px"}}>

       <img src={data?.organiser_image_url} height={200} width={200} style={{marginRight:"20px"}}/>
       <img src={data?.organiser_image_url} height={200} width={200}/>

       </div> */}

<div className="profile-card">
      <div className="profile-image" style={{ backgroundImage: `url(${data?.organiser_image_url})` }}></div>
      <div className="profile-info">
        <h2>name</h2>
        <p>title</p>
        <p>company</p>
        <p>location</p>
      </div>
      <div className="profile-links">
        <a href="#"><FacebookRoundedIcon/></a>
        <a href="#">< XIcon/></a>
        <a href="#"><LinkedInIcon/></a>
        <a href="#"><PublicRoundedIcon/></a>
      </div>
    </div>

        </div>

        {/* workshop section */}
        <div>

        </div>

        {/* sponser section */}
        <div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;
