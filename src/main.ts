import { AICompletion } from "./ai";

const ai = new AICompletion();

( async () => {
	console.log(await ai.createSalesLetter('Digital Marketing for people to create businesses and sell products online. Speak unattainable things so that people are enchanted. Dont talk about digital marketing but about its benefits, without explaining about it.'))
})()
