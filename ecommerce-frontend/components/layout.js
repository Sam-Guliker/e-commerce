import Header from "./Header"
import Meta from "./Meta"

export default function Layout({ children }) {
    return (
        <div className="container">
            <Meta />
            <Header />
            {children}
        </div>
    )
  }