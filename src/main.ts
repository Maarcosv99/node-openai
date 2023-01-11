import { AICompletion } from "./ai";

//import { ChatGPT } from '@/providers/chatgpt'
import { DaVinci } from "./providers/davinci"

const ai = new AICompletion( new DaVinci() );

( async () => {
	console.log(await ai.createSalesLetter('Digital Marketing for people to create businesses and sell products online. Speak unattainable things so that people are enchanted. Dont talk about digital marketing but about its benefits, without explaining about it.'))
})()
