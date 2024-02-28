import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.png";
import "./style.scss";

function Header() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileView = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    }
    if (type === "tvShows") {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("hide");
        } else {
          setShow("show");
        }
        setLastScrollY(window.scrollY);
      } else {
        setShow("top");
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="logo"
        >
          <img src={logo} />
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => {
              navigationHandler("movie");
            }}
          >
            Movie
          </li>
          <li
            className="menuItem"
            onClick={() => {
              navigationHandler("tvShows");
            }}
          >
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <SlMenu onClick={openMobileView} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a Movie or tv Show..."
                onKeyUp={searchQueryHandler}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
}

export default Header;
