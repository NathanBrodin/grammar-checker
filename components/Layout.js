import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 dark:bg-neutral-900 text-black dark:text-white">
        <Nav />
            {children}
        <Footer />
    </div>
  )
}
