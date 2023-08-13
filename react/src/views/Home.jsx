import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Components/Navbarstyle.css";
import Api from "../API/api";
import "../Styling/index.css";

export default function Home() {
    const [imgUrl, setimageUrl] = React.useState("");
    const [promptInput, setPromptInput] = React.useState("");
    const [imgUrlArray, setimageUrlArray] = React.useState([]);
    const renderImages = imgUrlArray.map((url, index) => (
        <img src={url} alt="#" key={index} />
      ));

    async function convertBlob(promptText) {
        const blob = await Api({ inputs: promptText });
        console.log(blob);
        if (!blob) {
            console.log("error");
            return;
        }

        const url = URL.createObjectURL(blob);
        setimageUrl(url);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        convertBlob(promptInput + " " + Math.floor(Math.random()*1000));
    };

    const handleInputChange = (event) => {
        setPromptInput(event.target.value);
    };

    return (
        <div className="Container">
            <Navbar />

            <div className="topHome">
                <h1 className="topHome-text">
                    Generate your image, make it as detailed as you want.
                </h1>
            </div>

            <form className="promptForm" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input
                        type="text"
                        id="promptId"
                        value={promptInput}
                        onChange={handleInputChange}
                        style={{
                            width: "1000px",
                            height: "40px",
                            fontSize: "20px",
                            backgroundColor: "#D9D9D9",
                        }}
                    />
                </div>

                <div className="buttonContainer">
                    <button
                        type="submit"
                        id="btnId"
                        style={{
                            width: "160px",
                            height: "40px",
                            backgroundColor: "#AB6E6E",
                            color: "#ffffff",
                        }}
                    >
                        Generate
                    </button>
                </div>
            </form>

            <div className="selectTxtContainer">
                <h1 className="selectTxt">If you're satisfied,</h1>
                <div className="buttonContainer">
                    <button
                        type="submit"
                        id="btnConfirm"
                        style={{
                            width: "160px",
                            height: "40px",
                            backgroundColor: "#AB6E6E",
                            color: "#ffffff",
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>

            <div
                className="imgContainer"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                }}
            >
                {imgUrl && (
                    <img
                        src={imgUrl}
                        alt="Generated Image"
                        style={{ maxWidth: "650px", maxHeight: "650px" }}
                    />
                )}
            </div>
        </div>
    );
}