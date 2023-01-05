export interface Customer {
	id: string;
	name: string;
	address: Address;
	communication: Communication;
	machine: Machine;
	credit_debit: number;
}
export interface Address {
	line1?: string;
	village?: string;
	district: string;
	pinCode: string;
}

export interface Communication {
	email: string;
	contactNumber: string;
	countryCode: string;
}

export interface Machine {
	name: string;
	year: string;
}
