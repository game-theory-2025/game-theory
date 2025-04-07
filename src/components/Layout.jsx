import Footer from "./footer";
import Header from "./header";


export default function Layout ({children}) {
    

    return (
        <div className="flex flex-col gap-4 min-h-screen p-3">
            <Header />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}