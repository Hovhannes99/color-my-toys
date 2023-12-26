import {Nav as NavContainer, NavLink, NavWrapper} from './styled.ts'
import {useLocation} from "react-router-dom";
import RegistrationNav from "@/components/header/auth";

const Nav = () => {
    const {pathname} = useLocation();


    return (
        <NavContainer>
            <NavWrapper>
                <NavLink
                    to="/"
                    $isActive={pathname === '/'}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    $isActive={pathname === '/about'}
                >
                    About Us
                </NavLink>
                <NavLink
                    to="/contact"
                    $isActive={pathname === '/contact'}

                >
                    Contact
                </NavLink>
            </NavWrapper>
            <RegistrationNav/>
        </NavContainer>
    )
}

export default Nav