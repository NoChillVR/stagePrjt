import axios from "axios";

function createAxiosInstance(){
	return axios.create({
		baseURL: "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
		headers: { Authorization: "Bearer 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" },
		responseType: "blob",
	})
	
}

export default async function Api(data) {
	const instance = createAxiosInstance();

	try {
		const response = await instance.post("", data);
		return response.data;
	} catch (error) {
		console.error(error)
		return null;
	}
}
