import { Product } from "./product.model";

export class Billing {
	items: Product[] = new Array<Product>();

	grandTotal: number = 0;
	taxableAmount: number = 0;

	constructor(
		id: string,
		billNumber: string,
		items: Product[],
		public SGST: number,
		public CGST: number,
	) {
		this.items = items;
	}

	getTaxableAmount() {
		let amount: number = 0;
		this.items.forEach((item: Product) => {
			amount += item.getPrice();
		});
		this.taxableAmount = amount;
		return amount;
	}

	getCharges() {
		return (this.taxableAmount / this.CGST + this.SGST) * 100;
	}

	getGrandTotal() {
		this.grandTotal = this.getTaxableAmount() + this.getCharges();
	}
}
