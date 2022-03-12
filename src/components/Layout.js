import {Link, Outlet} from "react-router-dom";
import icon from '../img.png'

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                    <img src={icon} width="80" height="80"
                         className="d-inline-block align-top" alt=""/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"><h3>Trang Chủ</h3><span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="cafe"><h3>Cafe</h3></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="tra"><h3>Trà </h3></Link>
                        </li>
                    </ul>
                </div>
                <div className="float-right">
                    Giỏ hàng (0)
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout

