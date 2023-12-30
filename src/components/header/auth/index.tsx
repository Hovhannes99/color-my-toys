import {ButtonWrapper, RegisterButton} from "@/components/header/nav/styled.ts";
import {useLocation, useNavigate} from "react-router-dom";
import AccountMenu from "@/components/header/account-menu";
import {useState} from "react";
import {Container} from "./styled.ts";


const RegistrationNav  = () =>{
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [isAuth] = useState(false)

    return(
        <Container>
            {!isAuth ? <ButtonWrapper>
                <RegisterButton
                    $isActive={pathname === '/auth/sign-in'}
                    onClick={() => navigate("/auth/sign-in")}
                >
                    Sign In
                </RegisterButton>
                <RegisterButton
                    $isActive={pathname === '/auth/sign-up' || pathname !== '/auth/sign-in'}
                    onClick={() => navigate("/auth/sign-up")}
                >
                    Sign Up
                </RegisterButton>
            </ButtonWrapper> :
                <AccountMenu/>}

        </Container>
    )
}

export default RegistrationNav