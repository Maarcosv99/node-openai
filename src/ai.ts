import { ICompresion, ISetup } from "@/interface"

export class AICompletion implements ICompresion {
	constructor(protected client: ISetup) {}

	async createCustomTemplate(message: string): Promise<string> {
		return await this.client.createCompletion(message)
	}

	async giveMoreDetails(message: string): Promise<string> {
		return await this.client.continueCompletion(message)
	}

	async createSyllabus(theme: string): Promise<string> {
		const message = `Create the syllabus of a ${theme} course from beginner to advanced.`
		return await this.client.createCompletion(message)
	}

	async createInstagramPost(theme: string): Promise<string> {
		const message = `Create a short text on the ${theme}. This copy needs to get a lot of attention to get clicks and sales.`
		return await this.client.createCompletion(message)
	}

	async createReviewProduct(
		product: string,
		quantity: number = 5
	): Promise<string> {
		const message = `
		Create ${quantity} reviews about ${product}. Focused on making the reader trust the product more and generate the desire to buy it.`
		return await this.client.createCompletion(message)
	}

	async createCopyAd(about_ad: string): Promise<string> {
		const message = `Create high converting copy for cold leads. The text needs to be short and direct. But you can't speak the words: money, profit, earn, invoice. The theme of the text is: ${about_ad}.`
		return await this.client.createCompletion(message)
	}

	async createSalesLetter(about_product: string): Promise<string> {
		const message = `Create a sales letter. the product is ${about_product}`
		return await this.client.createCompletion(message)
	}

	async createExplainSubejct(subject: string): Promise<string> {
		const message = `Explain more about this subject. ${subject}.`
		return await this.client.createCompletion(message)
	}

	async createSummarizeTopic(topic: string): Promise<string> {
		const message = `Summarize for me the content about ${topic}`
		return await this.client.createCompletion(message)
	}

}