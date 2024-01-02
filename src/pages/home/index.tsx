import Jessie from "@/assets/heroes/jessie";
import {Container, LeftWrapper, RightWrapper, Title, UploadButton, UploadButtonMobile} from "./styled.ts";
import VideoIntro from "@/pages/home/video";
import Works from "@/pages/home/works";
import Testimonials from "@/pages/home/testimonials";


const Home = () => {
  return (
      <>
          <Container>
              <LeftWrapper>
                  <Title>
                      Create  Activities for
                      Your children With Their  Favorite toy!
                  </Title>
                  <UploadButton>
                      Upload Picture Now
                  </UploadButton>
              </LeftWrapper>
              <RightWrapper>
                  <Jessie/>
                  <UploadButtonMobile>
                      Upload Picture Now
                  </UploadButtonMobile>
              </RightWrapper>
          </Container>
          <VideoIntro/>
          <Works/>
          <Testimonials/>
      </>

  )
}

export default Home;