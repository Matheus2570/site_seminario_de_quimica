import './Header.css'
import logo1 from "../assets/beautiful-sunset-oil-field-with-pump-jack.jpg";


function Header() {
    return (
        <>
            <header className="header">
            <img src={logo1} className="logo" alt="Imgem React" />
                <h1>De onde vem o petróleo? Dinossauros ou Vida Marinha?</h1>

            </header>

        </>
    )
}

export default Header       