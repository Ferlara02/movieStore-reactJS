import Menu from "./Navbar"

const Layout = ({children}) => {
    return(
        <>
        <Menu />
        <main className="main">
            
            {children}
        </main>
        <footer>
            <div className="separador" />
            <p>&#169; 2022 Fernando Lara.</p>
        </footer>
        </>
    )
};

export default Layout;