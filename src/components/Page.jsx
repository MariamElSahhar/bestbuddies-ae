import Navbar from './navbar/Navbar';
import Header from './Header';
import Footer from './Footer';

export default function Page({id, page, children, home, className}) {
  return (
    <div className={"page " + className} id={id}>
        <Navbar />
        {
            !home ?
            <Header page={page} /> :
            ''
        }
        {children}
        <Footer/>
    </div>
  )
}
