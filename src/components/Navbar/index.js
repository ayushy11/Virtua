import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileIcon, Nav, NavContainer, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        virtual
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">
                                Sign Up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;
