import React, { useEffect, useState } from "react";
import classes from "./firstSection.module.css";
import first_section_bg from "../../../../public/assets/homescreen/first_section_bg.png";
import orange_blob from "../../../../public/assets/homescreen/orange_blob.png";
import green_blob from "../../../../public/assets/homescreen/green_blob.png";
import orange_triangle from "../../../../public/assets/homescreen/orange_triangle.png";
import green_triangle from "../../../../public/assets/homescreen/green_triangle.png";
import triangle from "../../../../public/assets/homescreen/triangle.png";
import magnifying_glass from "../../../../public/assets/homescreen/magnifying_glass.png";
import drop_down_icon from "../../../../public/assets/homescreen/drop_down_icon.png";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

import Image from 'next/image';


import $ from "jquery";

function FirstSection() {
  var listener;
  var terms = ["Easiest", "Fastest", "Cheapest"];
  const [invertTriangles, setInvertTriangles] = useState();

  useEffect(() => {
    function rotateTerm() {
      var ct = $("#rotate").data("term") || 0;
      $("#rotate")
        .data("term", ct == terms.length - 1 ? 0 : ct + 1)
        .text(terms[ct])
        .fadeIn()
        .delay(2000)
        .fadeOut(200, rotateTerm);
    }
    $(rotateTerm);
  }, []);

  var terms2 = ["Property", "House", "Workspace"];

  useEffect(() => {
    function rotateTerm() {
      var ct = $("#rotate2").data("term") || 0;
      $("#rotate2")
        .data("term", ct == terms2.length - 1 ? 0 : ct + 1)
        .text(terms2[ct])
        .fadeIn()
        .delay(2000)
        .fadeOut(200, rotateTerm);
    }
    $(rotateTerm);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          setInvertTriangles(true);
        } else {
          setInvertTriangles(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div className={classes.first_section}>
      {/* <img src={first_section_bg.src} className={classes.bg} /> */}
      <div className={classes.bg}>
        <Image 
          src={first_section_bg.src}
          layout='fill'
        />

      </div>
      <div className={classes.orange_blob}>
        <Image 
          src={orange_blob.src}
          layout='fill'
        />

      </div>

      <div className={classes.green_blob}>
        <Image 
          src={green_blob.src}
          layout='fill'
        />

      </div>

      {/* <img src={orange_blob.src} className={classes.orange_blob} /> */}

      {/* <img src={green_blob.src} className={classes.green_blob} /> */}


      <img
        src={triangle.src}
        className={
          classes.triangle
        }
        // className={
        //   invertTriangles ? classes.triangle_upside_down : classes.triangle
        // }
      />

      <div className={classes.main_title_heading}>
        <div className={classes.first_line_single_row}>
          <h1>The</h1>
          <p className={classes.first_line_p}>
            <span style={{ color: "#ff9000" }} id="rotate"></span>
          </p>
        </div>

        <h1>
          {" "}
          way to rent a{" "}
          <span className={classes.orange_text} id="rotate2"></span>
        </h1>
      </div>

      <div className={classes.search_bar_container}>
        <p className={classes.coming_soon}>
          C O M I N G <span style={{ color: "transparent" }}>n</span> S O O N
        </p>
        {/* <div className={classes.search_bar}>
          <select className={classes.drop_down}>
            <option>Home Type</option>
          </select>
          <div className={classes.divider} />
          <img src={magnifying_glass.src} className={classes.search_icon} />
          <input
            className={classes.input_field}
            placeholder="Search Location"
          />
        </div>
        <div className={classes.search_btn}>
          <p>SEARCH</p>
        </div> */}
      </div>
    </div>
  );
}

export default FirstSection;
