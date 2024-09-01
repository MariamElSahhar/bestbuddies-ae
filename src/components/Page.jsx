import Navbar from "./navbar/Navbar";
import Header from "./header";
import Footer from "./footer";

export default function Page({ id, page, children, home, className }) {
	return (
		<div className={"page " + className} id={id}>
			<Navbar />
			{!home ? <Header page={page} /> : ""}
			{children}
			<Footer />
		</div>
	);
}
