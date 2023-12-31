import {Container, DesktopWrapper, LeftPart, MobileWrapper, RightPart, SubTitle, Text, Title} from "./styled.ts";
import Potato from "@/assets/heroes/potato";
import lego from "@/assets/heroes/potato/lego.png"

const texts = [
    "At Color My Toys, we believe in the magic of creativity and the joy it brings to little hearts and minds. Our unique platform caters to parents, educators, and anyone looking to spark a child's imagination through the joy of coloring.",
    "With a simple click, you can transform your child's beloved toys into customizable coloring pages. Just upload photos of their favorite toys, and our team will craft beautiful, line-drawn images ready for a splash of color. It's a fun, engaging way to breathe new life into well-loved toys, and an excellent tool for educators to create amazing coloring experiences tailored to their classroom themes.",
    "Our mission is to connect the dots between playtime and creativity, providing a canvas where kids can color their world, one toy at a time. Color My Toys isn't just about coloring; it's a space where memories are treasured, skills are sharpened, and the toys that have become a part of your child's growth journey can take on new, vibrant lives.",
    "Join us in this colorful adventure and watch as your child's imagination takes flight, coloring outside the lines of possibility!",
]

const About = () => {

    return (
        <Container>
            <LeftPart>
                <Title>ABOUT US</Title>
                <SubTitle>Welcome to Color My Toys – Where Imagination Meets the Page!</SubTitle>
                <DesktopWrapper>
                    {
                        texts.map((text, index)=>{
                            return <Text key={index}>{text}</Text>
                        })
                    }
                    <Text><span>Directed by: </span>Julian Francis Parker</Text>
                    <Text><span>Mail: </span><a href="mailto:julianfrancisparker@gmail.com">Julianfrancisparker@gmail.com</a></Text>
                </DesktopWrapper>
            </LeftPart>
            <RightPart>
                <Potato/>
                <MobileWrapper>
                    {
                        texts.map((text, index)=>{
                            return <Text key={index}>{text}</Text>
                        })
                    }
                    <Text><span>Directed by: </span>Julian Francis Parker</Text>
                    <Text><span>Mail: </span><a href="mailto:julianfrancisparker@gmail.com">Julianfrancisparker@gmail.com</a></Text>
                    <img src={lego} width={183} height={183} alt={'logo'}/>
                </MobileWrapper>
            </RightPart>
        </Container>
    )
}

export default About