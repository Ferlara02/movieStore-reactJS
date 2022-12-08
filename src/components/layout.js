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
            <p>&#169; 2022 <a href="https://www.linkedin.com/in/fernando-agust%C3%ADn-lara-929539241/" target="_blank"> Fernando Lara. </a> </p>
        </footer>
        </>
    )
};

export default Layout;