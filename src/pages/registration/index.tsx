import {Outlet} from "react-router-dom";
import {ChildrenContainer, Container, FieldContainer, Label, LogoContainer, LogoWrapper, SubLabel} from "./styled.ts";
import {SecondaryLogo} from "@/kit/logo/styled.ts";


const Registration = () => {
    return (
        <ChildrenContainer>
            <Container>
                <FieldContainer>
                    <Outlet/>
                </FieldContainer>
                <LogoContainer>
                    <LogoWrapper>
                        <SecondaryLogo/>
                    </LogoWrapper>
                    <Label>Color My Toys</Label>
                    <SubLabel>A seamless design workflow</SubLabel>
                </LogoContainer>
            </Container>
        </ChildrenContainer>
    )
}

export default Registration