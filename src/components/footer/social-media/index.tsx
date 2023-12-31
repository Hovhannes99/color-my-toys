import {ButtonIcon, Container} from "./styled.ts";
import facebook from "@/assets/icons/facebook.svg"
import twiter from "@/assets/icons/twiter.svg"
import instagram from "@/assets/icons/instagram.svg"
import pinterest from "@/assets/icons/pinteres.svg"
import linkedin from "@/assets/icons/linkedin.svg"

const socialMediaData = [
    {
        link:"https://www.facebook.com/",
        icon: facebook
    },
    {
        link:"https://twitter.com/",
        icon: twiter
    },
    {
        link:"https://www.instagram.com/",
        icon: instagram
    },
    {
        link:"https://www.pinterest.com/",
        icon: pinterest
    },
    {
        link:"https://www.linkedin.com/",
        icon: linkedin
    }
]
const SocialMedia = () =>{
    return (
        <Container>
            {socialMediaData.map((media)=><ButtonIcon key={media.link}>
                <a href={media.link} target={"_blank"} >
                    <img width={17} height={17} src={media.icon} alt="media"/>
                </a>
            </ButtonIcon>)}
        </Container>
    )
}

export default SocialMedia