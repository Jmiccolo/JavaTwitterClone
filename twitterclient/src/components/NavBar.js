import React from 'react';
import {NavLink} from 'react-router-dom';
import {FaTwitter} from 'react-icons/fa';
import {CgMoreO} from 'react-icons/cg';
import {BsEnvelope, BsBell, BsHash, BsHouse, BsBookmark, BsCardText, BsPerson} from 'react-icons/bs';

const NavBar = ({user}) => {
    function openMore(){}
    const userLink = `/${user.handle}`;
    return (
        <header className="navigation">
            <nav>
                <NavLink to="/home"><FaTwitter color="#1da1f2" size="2em"/></NavLink>
                <NavLink to="/home"><BsHouse color="black" size="2em"/><h1>Home</h1></NavLink>
                <NavLink to="/home"><BsHash color="black" size="2em"/><h1>Explore</h1></NavLink>
                <NavLink to="/home"><BsBell color="black" size="2em"/><h1>Notifications</h1></NavLink>
                <NavLink to="/home"><BsEnvelope color="black" size="2em"/><h1>Messages</h1></NavLink>
                <NavLink to="/home"><BsBookmark color="black" size="2em"/><h1>Bookmarks</h1></NavLink>
                <NavLink to="/home"><BsCardText color="black" size="2em"/><h1>Lists</h1></NavLink>
                <NavLink to={userLink}><BsPerson color="black" size="2em"/><h1>Profile</h1></NavLink>
                <button onClick={openMore}><CgMoreO color="black" size="2em" /><h1>More</h1></button>
            </nav>
            <button className="tweet-button">Tweet</button>            
        </header>
    );
};

export default NavBar;