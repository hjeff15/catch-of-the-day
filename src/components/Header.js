import React from "react";
import PropTypes from "prop-types";

// Stateless Functional Component - Can be better for performance if it is just passed in data from 'props' and returns some JSX
const Header = props => (
    <header className="top">
        <h1>Catch
            <span className='ofThe'>
                <span className='of'>Of</span>
                <span className='the'>The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>
            {props.tagline}
            </span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header;