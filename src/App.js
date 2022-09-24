import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Slider from "./Slider";
import { useState, useEffect } from "react";

function App() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

  const [sliderHeight, setSliderHeight] = useState(500);
  const [sliderWidth, setSliderWidth] = useState(1000);

  const updateSliderSize = () => {
    const W = window.innerWidth;

    if (W <= 1000 && W > 900) {
      setSliderWidth(900);
      setSliderHeight(450);
    } else if (W <= 900 && W > 800) {
      setSliderWidth(800);
      setSliderHeight(400);
    } else if (W <= 800 && W > 700) {
      setSliderWidth(700);
      setSliderHeight(350);
    } else if (W <= 700 && W > 600) {
      setSliderWidth(600);
      setSliderHeight(300);
    } else if (W <= 600 && W > 500) {
      setSliderWidth(500);
      setSliderHeight(250);
    } else if (W <= 500 && W > 400) {
      setSliderWidth(400);
      setSliderHeight(200);
    } else if (W <= 400 && W > 300) {
      setSliderWidth(300);
      setSliderHeight(150);
    } else if (W > 1000) {
      setSliderWidth(1000);
      setSliderHeight(500);
    }

    console.log("it should work");
  };

  window.addEventListener("resize", () => {
    const accualInnerWidth = window.innerWidth;

    setTimeout(() => {
      if (accualInnerWidth === window.innerWidth) {
        updateSliderSize();
      }
    }, 500);
    console.log(window.innerWidth)
  });

  useEffect(() => {
    updateSliderSize();
    console.log("it should work");
  }, []);

  const containerStyle = {
    height: sliderHeight + "px",
    width: sliderWidth + "px",
    margin: "0px auto",
    marginTop: "10px",
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <div style={containerStyle}>
            <Slider slides={slides} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
