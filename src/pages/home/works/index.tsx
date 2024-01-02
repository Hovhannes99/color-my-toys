import {Button, ButtonWrapper, Container, GridContainer, GridItem, Title} from "@/pages/home/works/styled.ts";
import {Fragment} from "react";

const data = [
    {
        id:1,
        img: 'https://i.ibb.co/3RPc14F/dog-bone-2-scaled-e1679831301171.png',
        realImage : "https://i.ibb.co/1KqnBsD/IMG-5090-scaled.png"
    },
    {
        id:2,
        img: 'https://i.ibb.co/YbPJmJy/6622525.png',
        realImage : "https://i.ibb.co/4Tjd6dj/Rocky-horse-1-scaled.png"
    },
    {
        id:3,
        img: 'https://i.ibb.co/7gDNnFF/Tiger-run-2-scaled-e1679831447950.png',
        realImage : "https://i.ibb.co/WV89yBs/IMG-5091-scaled.png"
    },
]
const Works = () => {
  return (
      <Container>
       <Title>Toy photo to coloring <br/>  Page examples.</Title>
       <GridContainer>
           {data.map((item)=>{
               return (
                   <Fragment key={item.id}>
                       <GridItem>
                           <img src={item.img} alt={item.img}/>
                       </GridItem>
                       <GridItem>
                           <img src={item.realImage} alt={item.realImage}/>
                       </GridItem>
                   </Fragment>
               )
           })}
       </GridContainer>
          <ButtonWrapper>
              <Button>Try a Free Picture</Button>
          </ButtonWrapper>
      </Container>
  )
}

export default Works