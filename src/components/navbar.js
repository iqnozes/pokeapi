import React from "react";

const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

const Navbar = () => {
    return (
        <nav>
            <div>

                <img alt="PokéAPI Logo"
                className="navbar-img"
                  src={logoimg}/>
            </div>
        </nav>
    )
}


export default Navbar