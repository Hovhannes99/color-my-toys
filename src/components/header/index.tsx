import {Container, NavWrapper} from "./styled.ts";
import Nav from "../header/nav/index.tsx";
import {useNavigate} from "react-router-dom";
import MenuNav from "@/components/header/menu";
import {Logo} from "@/kit/logo/styled.ts";

const Header = () => {
    const navigate  = useNavigate();

     return (
         <Container>
            <NavWrapper>
                 <Logo alt={"logo"} onClick={()=>navigate('/')}/>
                 <Nav/>
             </NavWrapper>
             <MenuNav/>
         </Container>
     )
}

export default Header