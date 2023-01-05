import { Customer } from "../../../shared/model/customer.model";

const customerFormError = (customer: Partial<Customer>) => {
	if (!customer.name) {
		return true;
	} else if (!customer?.communication?.contactNumber) {
		return true;
	} else if (
		!customer?.address?.district ||
		!customer?.address?.line1 ||
		!customer?.address?.village ||
		!customer?.address?.pinCode
	) {
		return true;
	}
	return false;
};
export { customerFormError };
