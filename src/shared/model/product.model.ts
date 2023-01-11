export interface Product {
	id: string;
	productName: string;
	productCode: string;
	productCost: number;
	GST: number;
	saleCost: number;
	unit: Unit;
	status: boolean;
	location: string;
	manufacturingCompany: Company;
	date: string;
	stock: number;
	minimumStock: number;
	category: Category;
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
