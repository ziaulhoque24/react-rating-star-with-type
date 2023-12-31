import { useState } from "react";
import RatingStarPackage from "react-rating-star-with-type";
import RatingStar from "../../src/RatingStar";
import "./App.css";

function App() {
  const [val, setVal] = useState(1);
  console.log(val);

  return (
    <div>
      <p>local</p>
      <RatingStar size={25} value={val} />
      <button onClick={() => setVal((prev) => prev + 1)}>Val</button>
      <p>from package</p>
      <RatingStarPackage size={25} value={val} />
    </div>
  );
}

export default App;
