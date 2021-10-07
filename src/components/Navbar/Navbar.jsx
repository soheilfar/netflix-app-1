import React from "react";
import netflixLogo from "../../images/logo/netflix-logo.png";
import profileImg from "../../images/profile/1.jpg";
import { VpnKey } from "@material-ui/icons";
import {
  Logo,
  Menu,
  Welcome,
  NavSec,
  ProfileImg,
  SignBtn,
  SignIcon,
} from "./StyleNavbar";
import { ImgFit } from "../../Variables";
import { Link, useLocation } from "react-router-dom";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const Navbar = ({ isLogin, setIsLogin }) => {
  let location = useLocation();
  let pathname = location.pathname;
  pathname = pathname.replace("/", "");
  let splitPath = pathname.split("/");
  const targetPath = splitPath[splitPath.length - 1];

  // console.log(targetPath);

  const { isScrolled } = useHomeContext();

  return (
    <>
      <NavSec className={isScrolled ? "navbara-fix" : "navbar-normal"}>
        <Logo>
          <ImgFit src={netflixLogo} alt="logo" />
        </Logo>
        {targetPath !== "video" && (
          <>
            <Menu>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/series">Series</Link>
            </Menu>
            <Welcome>
              <p>
                Welcome <span>New User</span>
              </p>
              <ProfileImg>
                <ImgFit src={profileImg} alt="profile" />
              </ProfileImg>
              <Link
                to={isLogin ? "/" : "/login"}
                onClick={() => setIsLogin(false)}
              >
                <SignBtn>{isLogin ? "Log Out" : "Log in"}</SignBtn>
              </Link>
              {!isLogin && (
                <Link to={{ pathname: "/register", isLogin: { isLogin } }}>
                  <SignBtn>
                    <VpnKey />
                    Register
                  </SignBtn>
                </Link>
              )}
              <SignIcon></SignIcon>
            </Welcome>
          </>
        )}
      </NavSec>
    </>
  );
};
