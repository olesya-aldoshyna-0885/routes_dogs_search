import { Suspense } from "react";
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
                <Suspense fallback={<div>Loading...</div>}>
                     <Outlet />
                </Suspense>
               
            </main>
            <footer>Footer</footer>
        </div>
    )
}

export default Layout;