import React, { useState } from "react";

const ImageDescription = ({ imgDetails = [{ url: "" }] }) => {
  const [mainImage, setImage] = useState(imgDetails[0]);

  const imageContainer = {
    borderRadius: "5px",
    padding: "40px 0px",
    width: "250px",
    height: "300px",
    boxShadow:
      "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
  };
  const imgTag = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
  };

  return (
    <div className="image-container">
      {/* <div className='image-part'> {
        imgDetails.map((curImg, index) => {
          return (
            <img className='img' src={curImg.url} alt={curImg.filename} onClick={() => setImage(curImg)} key={index} />

          )
        })
      }
      </div> */}
      <div style={imageContainer}>
        <img style={imgTag} src={mainImage.url} alt={mainImage.filename} />
      </div>
    </div>
  );
};

export default ImageDescription;
