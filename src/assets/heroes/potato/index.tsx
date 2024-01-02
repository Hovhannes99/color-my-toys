import {BgColor, Container, Image, LegoImage, Message} from "./styled.ts";
import potato from "./potato.png"
import lego from "./lego-pure.svg"

const Potato = () => {
    return (
        <Container>
            <Message>
                How are you ?
            </Message>
            <Image  src={potato} alt={'potato'}/>
            <BgColor/>
            <LegoImage  src={lego} alt={'lego'}/>
        </Container>
    )
}

export default Potato