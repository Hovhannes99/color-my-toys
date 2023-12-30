import {FC, ReactNode} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {ChildrenContainer, Container} from "@/layout/styled.ts";


const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <Container>
            <Header/>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
            <Footer/>
        </Container>
    )
}


export default Layout