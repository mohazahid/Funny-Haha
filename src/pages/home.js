import React from "react";
import "./Css/home.css";
import { IconButton, Link } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { useMatch, useResolvedPath } from "react-router-dom";

export default function Home() {
  return (
    <div className="HomePage">
      <CustomNav />
      <div className="NameParallax" id="Page-1">
        <div className="ParallaxName"></div>
      </div>

      <div className="ContentParallax" id="Page-2"></div>
    </div>
  );
}

function CustomNav() {
  return (
    <div className="CustomNav">
      <ul>
          <CustomLink to="#Page-1"></CustomLink>
          <CustomLink to="#Page-2"></CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({to, children, ...props}) {
  return (
          <IconButton className={"Icon"}
          component = {Link} href = {to} {...props}>
            <CircleIcon />
          </IconButton>
  );
}