import { Product } from "../../../shared/model/product.model";

const productFormError = (product: Partial<Product>) => {
	console.log(product);
	if (
		!product.productName ||
		!product.productCode ||
		!product.MRP ||
		!product.saleCost ||
		!product.GST ||
		!product.stock ||
		!product.date
	) {
		return true;
	}
	return false;
};
export { productFormError };
