export class Product {
	constructor(
		public id: string,
		public productName: string,
		public productCode: string,
		public purchaseCost: number,
		public MRP: number,
		public CGST: number,
		public SGST: number,
		public saleCost: number,
		public unit: Unit,
		public status: boolean,
		public location: string,
		public manufacturingCompany: Company,
		public date: string,
		public stock: number,
		public minimumStock: number,
		public category: Category,
		public quantity: number,
	) {}

	public getPrice() {
		return this.saleCost * this.quantity;
	}
}

export interface Category {
	id: string;
	name: string;
}

export interface Unit {
	id: string;
	name: string;
}

export interface Company {
	id: string;
	name: string;
}
