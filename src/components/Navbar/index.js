import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavContainer, NavItem, NavLinks, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">virtua</NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
