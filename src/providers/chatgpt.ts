import { ChatGPTAPIBrowser } from 'chatgpt'
import { ISetup } from "@/interface";

import * as dotenv from 'dotenv'

dotenv.config({});

export class ChatGPT implements ISetup {
	protected client: ChatGPTAPIBrowser
	protected last_message: Record<string, any>

	constructor() {
		this.client = new ChatGPTAPIBrowser({
			email: process.env.OPENAI_EMAIL,
			password: process.env.OPENAI_PASSWORD,
			executablePath: '/snap/brave/194/opt/brave.com/brave/brave-browser',
			minimize: true
		})
	}

	async createCompletion(message: string): Promise<string> {
		const response = await this.client.sendMessage(message)
		this.last_message = {
			conversationId: response.conversationId,
			parentMessageId: response.messageId
		}
		return response.response
	}

	async continueCompletion(message: string): Promise<string> {
		const response = await this.client.sendMessage(message, this.last_message)
		this.last_message = {
			conversationId: response.conversationId,
			parentMessageId: response.messageId
		}
		return response.response
	}
}