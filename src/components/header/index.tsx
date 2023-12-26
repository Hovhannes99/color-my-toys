import {Container, Logo, NavWrapper} from "./styled.ts";
import   logo from "@/assets/icons/logo.svg"
import Nav from "../header/nav/index.tsx";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate  = useNavigate();

     return (
         <Container>
            <NavWrapper>
                 <Logo src={logo} alt={"logo"} onClick={()=>navigate('/')}/>
                 <Nav/>
             </NavWrapper>
         </Container>
     )
}

export default Header