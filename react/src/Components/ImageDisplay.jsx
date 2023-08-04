import React from "react";

const ImageDisplay = ({ imgUrl }) => {
  return (
    <div className="imgContainer" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
      {imgUrl && (
        <img
          src={imgUrl}
          alt="Generated Image"
          style={{ maxWidth: "650px", maxHeight: "650px" }}
        />
      )}
    </div>
  );
};

export default ImageDisplay;