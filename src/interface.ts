export interface ICompresion {
	createCustomTemplate(message: string): Promise<string>
	giveMoreDetails?(message: string): Promise<string>

	createSyllabus(theme: string): Promise<string>
	createInstagramPost(theme: string): Promise<string>
	createReviewProduct(product: string, quantity: number): Promise<string>
	createCopyAd(about_ad: string): Promise<string>
	createSalesLetter(about_product: string): Promise<string>
	createExplainSubejct(subject: string): Promise<string>
	createSummarizeTopic(topic: string): Promise<string>
}

export interface ISetup {
	createCompletion(message: string): Promise<string>
	continueCompletion?(message: string): Promise<string>
}