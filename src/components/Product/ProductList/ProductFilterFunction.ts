import { filter } from "lodash";

export const applySortFilter = (array: any, query: any) => {
	if (query) {
		return filter(
			array,
			(product: any) =>
				product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
		);
	}
	return array;
};
