

function Header(){
    return <>

    <nav className="navbar border-bottom font-verdana position-sticky top-0 bg-white">
    <div className="container-fluid">
        <a className="navbar-brand font-magic fs-3">Pallyy</a>
        <div className="d-flex" >
            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover p-2" href="#">Scheduling</a>
            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover p-2" href="#">Anaylytics</a>
            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover p-2" href="#">Inbox</a>
            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover p-2" href="#">Teams</a>
            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover p-2" href="#">Pricing</a>
            <a className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover p-2" href="#">Login</a>
            <button className="btn btn-outline-dark rounded-pill">Get Started</button>
        </div>
    </div>
    </nav>
    </>
}


export default Header;