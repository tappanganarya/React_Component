function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <h1>Exhibition <span className="copy">©</span></h1>
                <p className="tagLine">Show Your Stamina!!</p>
            </div>

            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )

}
export default Navbar;
