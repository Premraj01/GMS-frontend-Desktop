// component
import SvgColor from "../../../utils/components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
	<SvgColor
		src={`/assets/icons/navbar/${name}.svg`}
		sx={{ width: 1, height: 1 }}
	/>
);

const navConfig = [
	{
		title: "dashboard",
		path: "/dashboard/landing",
		icon: icon("ic_analytics"),
	},
	{
		title: "customer",
		path: "/dashboard/customer",
		icon: icon("ic_user"),
	},
	{
		title: "product",
		path: "/dashboard/products",
		icon: icon("ic_cart"),
	},
	{
		title: "blog",
		path: "/dashboard/blog",
		icon: icon("ic_blog"),
	},
	{
		title: "login",
		path: "/login",
		icon: icon("ic_lock"),
	},
	{
		title: "Not found",
		path: "/404",
		icon: icon("ic_disabled"),
	},
];

export default navConfig;
