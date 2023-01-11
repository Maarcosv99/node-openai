import { Configuration, OpenAIApi } from "openai";
import { ISetup } from "@/interface";

import * as dotenv from 'dotenv'

dotenv.config({});

export class DaVinci implements ISetup {
	protected client: OpenAIApi;

	constructor() {
		const configuration = new Configuration({
			apiKey: process.env.OPENAI_API_KEY,
		})
		this.client = new OpenAIApi(configuration)
	}

	async createCompletion(message: string): Promise<string> {
		const completion = await this.client.createCompletion({
			model: "text-davinci-003",
			prompt: message,
			temperature: 0.5,
			max_tokens: 500,
			top_p: 0.5,
			frequency_penalty: 0.5,
			presence_penalty: 0.2
		});
		return completion.data.choices[0].text
	}
}