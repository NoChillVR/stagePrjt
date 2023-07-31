import React from "react";
import Navbar from "../Components/Navbar";
import "../Components/Navbarstyle.css";
import Api from "../API/api";

async function convertBlob(){
    const blob = await Api({ inputs: "Clown writing on paper, kentaro miura style, 4k, dark theme" });
    console.log(blob);
    if(!blob){
        console.log("error");
        return
    }

    return URL.createObjectURL(blob);
}

export default function Home() {
    const [imgUrl, setimageUrl] = React.useState('');

    async function loadImgUrl(){
        const url = await convertBlob()
        setimageUrl(url)
    }

    React.useEffect(() =>{
        loadImgUrl();
    },[])
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
            <img src={imgUrl} />
        </div>
    );
}