import {ButtonWrapper, RegisterButton} from "@/components/header/nav/styled.ts";
import {useLocation, useNavigate} from "react-router-dom";
import AccountMenu from "@/components/header/account-menu";


const RegistrationNav  = () =>{
    const {pathname} = useLocation();
    const navigate = useNavigate();


    return(
        <>
           <ButtonWrapper>
                <RegisterButton
                    $isActive={pathname === '/login'}
                    onClick={() => navigate("/login")}
                >
                    Login
                </RegisterButton>
                <RegisterButton
                    $isActive={pathname === '/sign-up' || pathname !== '/login'}
                    onClick={() => navigate("/sign-up")}
                >
                    Sign Up
                </RegisterButton>
            </ButtonWrapper>
            <AccountMenu/>

        </>
    )
}

export default RegistrationNav