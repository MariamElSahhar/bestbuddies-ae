import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Header from "../components/header";

export default function PageTemplate({ header = "", children }) {
	return (
		<div className={"page"}>
			{header && <Header page={header} />}
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
