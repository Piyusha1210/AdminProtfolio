import "./header.css";
import WellIcon from "../Assets/well-icon.png";
import SearchBar from "../Assets/Search icon.png";

function Header() {
  return (
    <div className="header">
      <h2>Dashboard</h2>
      <div className="header-left-items">
        <div className="header-item search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="search-inp"
          ></input>
          <img src={SearchBar}></img>
        </div>
        <img src={WellIcon} className="header-item" />
        <div className="header-item user-dp"></div>
      </div>
    </div>
  );
}
export default Header;
