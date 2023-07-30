import axios from "axios";
export async function query(data) {
    /*const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;*/

    axios
        .get("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1", {
            responseType: "blob",
			headers: {Authorization: "Bearer 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"}
        })
        .then((response) => {
			console.log(response);
			const imgUrl = URL.createObjectURL(response.data)
			console.log(imgUrl);
			return imgUrl;
        })
        .catch((error) => {
            alert(
                "something goes wrong! Maybe image url broken, try another img url."
            );
        });
}
