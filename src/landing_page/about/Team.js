import React from 'react';

function Team() {
    return ( 
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/zero.webp"
            style={{ borderRadius: "100%", width: "50%" , height :"50%"}}
          />
          <h4 className="mt-5">Sumit Sharma</h4>
          <h6>Founder, Creator</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Sumit Sharma and Team Members developed a fully responsive Zerodha clone in 2025 to enhance his web development skills. The clone replicates all key services of the original platform, providing a seamless user experience.
          </p>
          <p>
          All Team Members implemented real-time data fetching, user authentication, and intuitive
           UI elements , making it not only functional but also user-friendly.
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="https://github.com/Sumit-Sharma123">Github</a> / <a href="https://www.linkedin.com/in/sumit-sharma-928a63273/">LinkedIn</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
      
    </div>
     );
}

export default Team;