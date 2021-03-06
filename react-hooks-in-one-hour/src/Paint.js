import React, { useState, useEffect, useRef } from "react";
import Name from "./Name";
import ColorPicker from "./ColorPicker";
import randomColor from "randomcolor";
import WindowSize from "./WindowSize";
import Canvas from "./Canvas";

function Paint() {
  // creating our Ref
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const getColors = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((res) => res.json())
      .then((res) => {
        setColors(res.colors.map((color) => color.hex.value));
        setActiveColor(res.colors[0].hex.value);
      });
  };

  useEffect(getColors, []);
  const headerRef = useRef({ offsetHeight: 0 })

  return (
    <div className="app">
      {/* Adding ref to header tag so that we can access it with variable */}
      {/* THe DOM element will be at header.current */}
      <header
        ref={headerRef}
        style={{ borderTop: `10px solid ${activeColor}` }}
      >
        <div className="app">
          <Name />
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        </div>
      </header>
      {activeColor && (
        <Canvas color={activeColor} height={window.innerHeight - headerRef.current.offsetHeight} />
      )}
      <WindowSize />
    </div>
  );
}

export default Paint;
