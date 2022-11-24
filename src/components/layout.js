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
            <p>Todos los derechos reservados: Fernando Lara.</p>
        </footer>
        </>
    )
};

export default Layout;