import Footer from "./Footer";
import Nav from "./Nav";


export default function Layout({ children }) {
  return (
    <div className="bg-gray-200">
        <Nav />
            {children}
        <Footer />
    </div>
  )
}
