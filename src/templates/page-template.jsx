import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
