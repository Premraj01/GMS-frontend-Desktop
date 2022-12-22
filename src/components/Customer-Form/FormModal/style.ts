import styled from "@emotion/styled";

const Form = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "auto",
	bgcolor: "background.paper",
	borderRadius: "1rem",
	boxShadow: 24,
	p: 1,
	pb: 2,
	pr: 2,
	pl: 2,
};

const StyledRoot = styled("div")(({ theme }: any) => ({
	[theme.breakpoints.up("md")]: {
		display: "flex",
	},
}));

const StyledSection = styled("div")(({ theme }: any) => ({
	width: "100%",
	maxWidth: 480,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	boxShadow: theme.customShadows.card,
	backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled("div")(({ theme }: any) => ({
	maxWidth: 480,
	margin: "auto",
	minHeight: "100vh",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	padding: theme.spacing(12, 0),
}));

export { Form, StyledRoot, StyledSection, StyledContent };
