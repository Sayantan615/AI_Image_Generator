import "./App.css";
import React, { useState } from "react";
import fetchImageDataArr from "./fetchImageData";

function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagesArr, setImagesArr] = useState([]);
  const [isLoadingvisible, setIsLoadingvisible] = useState(false);
  const handleInput = async () => {
    setIsLoadingvisible(true);
    setLoading(true);
    console.log(input);
    const arr = await fetchImageDataArr(input);
    setLoading(false);
    setIsLoadingvisible(false);
    console.log(arr);
    setImagesArr(arr);
  };
  const styleObj = {
    display: isLoadingvisible === true ? "block" : "none",
  };
  return (
    <>
      <h1>ImgGen</h1>
      <div className="container">
        <div className="input_wrapper">
          <input
            type="text"
            id="text-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button id="generator-button" onClick={handleInput}>
            Generate
          </button>
        </div>
        <div className="image-grid">
          <div className="placeholder">
            {loading == true ? (
              <div style={styleObj}>"Loading..."</div>
            ) : (
              <img src={imagesArr && imagesArr.length ? imagesArr[0].url : ""} alt=""></img>
            )}
          </div>
          <div className="placeholder">
            {loading == true ? (
              <div style={styleObj}>"Loading..."</div>
            ) : (
              <img src={imagesArr && imagesArr.length ? imagesArr[1].url : ""} alt=""></img>
            )}
          </div>
          <div className="placeholder">
            {loading == true ? (
              <div style={styleObj}>"Loading..."</div>
            ) : (
              <img src={imagesArr && imagesArr.length ? imagesArr[2].url : ""} alt=""></img>
            )}
          </div>
          <div className="placeholder">
            {loading == true ? (
              <div style={styleObj}>"Loading..."</div>
            ) : (
              <img src={imagesArr && imagesArr.length ? imagesArr[3].url : ""} alt=""></img>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
