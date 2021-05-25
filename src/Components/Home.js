import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="homeBody">
        <div className="homeBgColor"></div>
        <div className="imgPresentation">
          <div className="imgBgDiv"></div>
          <img className="img2" src="https://i.imgur.com/p9UnKoH.png" alt="" />
          {/* <img src="tvapp\img\methodist-church.png" alt=""/> */}
          <h2>Mount Of Grace</h2>
        </div>
        <div className="homeMenuList">
          <ul>
            <Link to="/about">
              <div className="firstDiv">
                <i class="fas fa-church"></i>
                <li>About</li>
              </div>
            </Link>
            <Link to="/location">
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <li>Location</li>
              </div>
            </Link>
            <Link to="/wordbliss">
              <div>
                <i className="fas fa-book-open"></i>
                <li>Word Bliss</li>
              </div>
            </Link>
            <Link to="live">
              <div>
                <i className="fab fa-youtube"></i>
                <li>Live</li>
              </div>
            </Link>
            <Link to="/sermon">
              <div>
                <i className="fas fa-bible"></i>
                <li>Sermon/Word of God</li>
              </div>
            </Link>
            <Link to="/event">
              <div>
                <i className="far fa-calendar-check"></i>
                <li>Events</li>
              </div>
            </Link>
            <Link to="/announcement">
              <div>
                <i className="fas fa-bullhorn"></i>
                <li>Anouncement</li>
              </div>
            </Link>
            <Link to="group">
              <div>
                <i className="fas fa-users"></i>
                <li>Groups/Departments</li>
              </div>
            </Link>
            <Link to="in-app-giving">
              <div>
                <i className="fas fa-hand-holding-usd"></i>
                <li>In-App-Giving</li>
              </div>
            </Link>
            <Link to="/settings">
              <div>
                <i className="fas fa-user-cog"></i>
                <li>Settings/Profile</li>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
