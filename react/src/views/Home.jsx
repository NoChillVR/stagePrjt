import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/Navbarstyle.css";
import { query } from "../API/api.js";

export default function Home() {
    const [imgURL, setImgURL] = React.useState("")
    React.useEffect(()=>{
        query({"inputs": "Clown"}).then((response) => {
            console.log(response);
        });
    })
    return (
        <div className="Container">
            <Navbar />

            <div className="topHome">
                <h1 className="topHome-text">
                    Generate your image, make it as detailed as you want.
                </h1>
            </div>

            <form className="promptForm">
                <input type="text" id="promptId" />
                <button>Generate</button>
            </form>
            <img src={imgURL} />
        </div>
    );
}
