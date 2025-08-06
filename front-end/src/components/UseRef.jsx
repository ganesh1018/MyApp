import { useRef, useState } from "react";

function InputFocusCounter() {
  const inputRef = useRef(null);        // For accessing the input DOM
  const countRef = useRef(0);           // For storing count without re-render
  const [focusCount, setFocusCount] = useState(0);  // For showing on UI

  const handleFocus = () => {
    inputRef.current.focus();           // Focus the input
    countRef.current += 1;
   
    console.log(countRef.current); 
          // Update internal ref (no re-render)
    setFocusCount(countRef.current);    // Trigger re-render to show on screen
  };

  return (
    <div style={{ padding: "20px" }}>
      <input ref={inputRef} type="text" placeholder="Click button to focus me" />
      <br /><br />
      <button onClick={handleFocus}>Focus Input</button>
      <p>Input was focused <strong>{focusCount}</strong> times.</p>
    </div>
  );
}

export default InputFocusCounter;

;