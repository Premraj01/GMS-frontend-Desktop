export interface Product {
	id: string;
	productName: string;
	productCost: number;
	GST: number;
	MRP: number;
	saleCost: number;
	unit: string;
	status: boolean;
	location: string;
	manufacturingCompany: string;
	date: string;
	stock: number;
	minimumStock: number;
	category: Category;
}

export interface Category {
	id: string;
	name: string;
}
