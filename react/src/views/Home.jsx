import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Components/Navbarstyle.css";
import Api from "../API/api";

export default function Home() {
    const [imgUrl, setimageUrl] = React.useState("");
    const [promptInput, setPromptInput] = React.useState("");

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
        convertBlob(promptInput);
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
                <input
                    type="text"
                    id="promptId"
                    value={promptInput}
                    onChange={handleInputChange}
                />
                <button type="submit">Generate</button>
            </form>
            {imgUrl && <img src={imgUrl} alt="Generated Image" />}
        </div>
    );
}
