import React from "react"

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                {props.Title}
            </div>
        </nav>
    )
}

export default Header