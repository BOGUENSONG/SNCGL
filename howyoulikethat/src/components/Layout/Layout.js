import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const layout = (props : {
    children: React.ReactNode
}) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
export default layout