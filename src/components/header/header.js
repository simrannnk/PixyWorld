import "./header.css"
import unsplashLogo from "../../assets/unsplash Logo.png";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import axios from 'axios';

const Header = ({ passData }) => {
  const [value, setValue] = useState("");
  const [searchImages, setSearchImages] = useState([]);

  const showImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=XH07Mf7_whm2ewveZCJ7oRQD84HeGl-XDmu5fFk6Pv4&query=${value}&per_page=20`
      )
      .then((res) => {
        console.log("ghghjhj")
        setSearchImages([...searchImages,...res.data.results]);
      });
  };

  passData(value,searchImages);
  return (
    <header className="header-container">
      <div className="unsplashLogo">
        <img src={unsplashLogo} alt="" className="logo"></img>
      </div>
      <div className="searchBar">
        <BiSearch />
        <input
          placeholder="Search free high-resolution photos"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
      </div>
      <div className="showBtn-container">
        <button className="showBtn" onClick={showImages}>
          Show Photos
        </button>
      </div>

      <div className="actionBtns">
        <div className="actionDiv">
          <ul className="actionList">
            <li className="listItem">Explore</li>
            <li className="listItem">Create</li>
            <li className="listItem">Inspire</li>
            <li className="listItem">|</li>
          </ul>
        </div>

        <div className="login-signup">
          <a href="#" className="login">
            Log in
          </a>
          /
          <a href="#" className="signup">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;