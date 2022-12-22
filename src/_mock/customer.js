const TABLE_HEAD = [
	{ id: "name", label: "Sr.no", alignRight: false },
	{ id: "name", label: "Name", alignRight: false },
	{ id: "company", label: "Contact", alignRight: false },
	{ id: "address", label: "Address", alignRight: false },
	{ id: "machine", label: "Machine", alignRight: false },
	{ id: "status", label: "Status", alignRight: false },
	{ id: "", label: "", alignRight: false },
];

const dummyCustomerData = [
	{
		id: "1",
		name: "AAtushar nevase",
		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "5",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "3",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
	{
		id: "1",
		name: "Tushar nevase",
		conatctNumber: "999999999999",

		address: "A/p karanjkhop,tal.koregaon,dist.satara-415000",
		machine: "Mahindra Jio",
		status: true,
	},
];

export { TABLE_HEAD, dummyCustomerData };
