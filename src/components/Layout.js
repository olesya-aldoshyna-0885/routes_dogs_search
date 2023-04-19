import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <NavLink to="/">Home page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dogs">Collection</NavLink>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout;