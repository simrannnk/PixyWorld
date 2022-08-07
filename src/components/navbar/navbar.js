import { useEffect, useState } from 'react';
import axios from 'axios';
import './navbar.css'
const Navbar = ({ passData2 }) => {
  const [tagName, setTagName] = useState("");
  const [searchTag, setSearchTag] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setTagName(e.target.textContent);
    console.log(e.target.textContent);
     setIsClicked(true);
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=XH07Mf7_whm2ewveZCJ7oRQD84HeGl-XDmu5fFk6Pv4&query=${e.target.textContent}&per_page=50`
      )
      .then((res) => {
        setSearchTag(res.data.results);
      });
  };

  useEffect(() => {
    console.log(tagName); 
  },[tagName])

  passData2(searchTag,isClicked);
  return (
    <div className="nav">
      <ul className="navList">
        <li
          className={`navItem ${isClicked ? "isActive" : ""}`}
          onClick={handleClick}
        >
          <a href="#">Editorial</a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Current Events
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Wallpapers
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            3D Renders
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Textures & Patterns
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Experimental
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Architecture
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Nature
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Food & Drink
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Fashion
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Business & Work
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Health & Wellness
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Travel
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Street Photography
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Animals
          </a>
        </li>
        <li className={`navItem ${isClicked ? "isActive" : ""}`}>
          <a href="#" onClick={handleClick}>
            Art & Culture
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;