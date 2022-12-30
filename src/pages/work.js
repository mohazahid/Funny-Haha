import React from "react";
import imgArr from "./Images";



export default function Work() {
  return (
    <div className = "WorkPage ">
      <h1> Projects</h1>
      <div className = "WorkPage_grid_item">

         {imgArr.map((imgsr) =>
          //<img src={imgsr.src} className = "gridPhoto" alt="passedImg"/>
          <CustomGrid key = {imgsr.id} imgsrc = {imgsr.src}  title = "Project 1" description = "This is a description of the project" link = "https://www.google.com"/>
        )}
      </div>
      
      
      </div>
    
  );
}
function CustomGrid(imgsrc, title, description, link) {
  console.log("images/ProjectsImages/"+imgsrc.imgsrc);
  return (
      <div className = "WorkPage_grid">
        <div className = "Q1_area"> 
          <img src= {"images/ProjectsImages/"+imgsrc.imgsrc} className = "gridPhoto" alt="passedImg"/>
        </div>
           
            <div className = "WorkPage_grid_item2">
              <h2 className = "h2 item2">
                Skills
              </h2>
              <ul className="Skills">
                <li>C++</li>
                <li>Backend</li>
                <li>Java</li>
                <li>C++</li>
                <li>Backend</li>
                <li>Java</li>
              </ul>
            </div>
            <div className = "WorkPage_grid_item3"> 3</div>
            <div className = "WorkPage_grid_item4"> 4</div>
      </div>
    )};