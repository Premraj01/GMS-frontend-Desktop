import { filter } from "lodash";

export const applySortFilter = (array: any, query: any) => {
	if (query) {
		return filter(
			array,
			(customer: any) =>
				customer.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
		);
	}
	return array;
};
