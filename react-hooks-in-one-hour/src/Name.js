import React, { useState } from "react";

function Name() {
  let [name, setName] = useState("");

  return (
    <label>
      <input
         value={name}
         onChange={e => setName(e.target.value)}
         onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
         placeholder={"Untitled"}></input>
    </label>
  );
}

export default Name;
