import './navbar.css'
const Navbar = () => {

    return (
        <>
            <div className="fluid-container">
            <div className="d-flex justify-content-between bg-light">
                <div className="justify-content-center left-navbar  align-items-center">
                <i className="fa fa-user fa-5x" aria-hidden="true"></i>
                </div>
                <div className="right-navbar align-items-center d-flex">
                    <ul className="d-flex">
                        <li><a href="/">Home</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar