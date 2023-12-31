import {Container, Line, LogoWrapper, Subtitles, TextWrapper} from "./styled.ts";
import {Logo} from "@/kit/logo/styled.ts";
import SocialMedia from "@/components/footer/social-media";

const privacyData = ["Privacy Policy", "Shipping Details", "Terms & Conditions"]
const categoriesData = ['BRAND DIRECTORY', 'CASE STUDIES','BLOG','PRICING','FAQ', 'ABOUT', 'CONTACT']
const Footer = () => {
  return (
      <Container>
          <LogoWrapper>
              <Logo/>
          </LogoWrapper>
          <TextWrapper>
              {privacyData.map((text)=>{
                  return (
                      <Subtitles key={text}>{text}</Subtitles>
                  )
              })}
          </TextWrapper>
          <Line/>
          <TextWrapper>
              {categoriesData.map((text)=>{
                  return (
                      <Subtitles key={text}>{text}</Subtitles>
                  )
              })}
          </TextWrapper>
          <SocialMedia/>
      </Container>
  )
}

export default Footer