import { Product } from "../../../shared/model/product.model";

const productFormError = (customer: Partial<Product>) => {
	// if (!customer.name) {
	// 	return true;
	// } else if (!customer?.communication?.contactNumber) {
	// 	return true;
	// } else if (
	// 	!customer?.address?.district ||
	// 	!customer?.address?.line1 ||
	// 	!customer?.address?.village ||
	// 	!customer?.address?.pinCode
	// ) {
	// 	return true;
	// }
	return false;
};
export { productFormError };
