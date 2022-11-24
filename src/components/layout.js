import Menu from "./Navbar"

const Layout = ({children}) => {
    return(
        <>
        <Menu />
        <main className="main">
            
            {children}
        </main>
        </>
    )
};

export default Layout;