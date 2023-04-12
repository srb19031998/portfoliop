import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
const Navbar1 = ()=>{
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' >
          <AiOutlineHome style={{ marginBottom: "2px" }} />
           Home
          </NavLink>
          <NavLink to='/about' >
          <AiOutlineUser style={{ marginBottom: "2px" }} /> 
            About
          </NavLink>
          <NavLink to='/projects' >
          <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
            Projects
          </NavLink>
          <NavLink to='/resume' >
          <CgFileDocument style={{ marginBottom: "2px" }} />
            Resume
          </NavLink>
          <NavLink to='/blogs' >
            Blogs
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );

}

export default Navbar1;