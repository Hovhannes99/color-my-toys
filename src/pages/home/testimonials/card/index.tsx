import person1 from '@/assets/person2.png'
import person2 from '@/assets/person3.png'
import person3 from '@/assets/person6.png'
import person4 from '@/assets/person5.png'
import person5 from '@/assets/person5.png'
import SwipeFeedback from "@/kit/swiper";
import {SwiperSlide} from "swiper/react";
import {
    ClientWrapper,
    Description,
    FeedbackContainer,
    Text,
    Container,
    FeedbackWrapper,
    RatingWrapper
} from "./styled.ts";
import {Rating} from "@mui/material";
import Avatar from "@mui/material/Avatar";


const dataSlick = [
    {
        id:1,
        img: person1,
        name:'M. Perez',
        role:'COO',
        description:"I wanted to express how impressed I am with your platform! As a parent and an educator, finding resources that foster creativity and imagination in children is paramount, and your website truly excels in this aspect.",
        color:"#E8325B"
    },
    {
        id:2,
        img:person2,
        name:'A. Hernandez',
        role:'CMO',
        color:'#2D949D',
        description:"I wanted to express how impressed I am with your platform! As a parent and an educator, finding resources that foster creativity and imagination in children is paramount, and your website truly excels in this aspect.",
    },
    {
        id:3,
        img:person3,
        name:'M. Sanchez',
        role:'Chief Information Officer (CIO)',
        color:'#F58809',
        description:"I wanted to express how impressed I am with your platform! As a parent and an educator, finding resources that foster creativity and imagination in children is paramount, and your website truly excels in this aspect.",
    },
    {
        id:4,
        img:person4,
        name:'D. Torres',
        color:"#E8325B",
        role:'Information Security Officer (ISO)',
        description:"I wanted to express how impressed I am with your platform! As a parent and an educator, finding resources that foster creativity and imagination in children is paramount, and your website truly excels in this aspect.",

    },
    {
        id:5,
        img:person5,
        name:'M. Perez',
        role:'Owner of KTY',
        color:'#2D949D',
        description:"I wanted to express how impressed I am with your platform! As a parent and an educator, finding resources that foster creativity and imagination in children is paramount, and your website truly excels in this aspect.",
    },
    {
        id:6,
        img: null,
        name:'J. Garcia',
        role:'CTO in LIY',
        color:"#E8325B",
        description:"I wanted to express how impressed I am with your platform! As a parent and an educator, finding resources that foster creativity and imagination in children is paramount, and your website truly excels in this aspect.",
    }
]



const Card = () =>{

    return (
        <Container>
            <SwipeFeedback>
                {dataSlick.map((item)=>{
                    return (
                        <SwiperSlide key={item.id}>
                            <FeedbackWrapper>
                                <FeedbackContainer style={{background: `${item.color}`}}>
                                    <Description>{item.description}</Description>
                                    <RatingWrapper>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                    </RatingWrapper>
                                    <ClientWrapper>
                                        {item.img ? <img
                                            width={73}
                                            height={73}
                                            src={item.img}
                                            alt={`${item.img}`}
                                        />:
                                            <Avatar sx={{width:"73px", height:"73px", fontSize:"2rem", marginBottom:"16px"}}>{item.name.split("")[0]}</Avatar>
                                        }
                                        <Text>{item.name}</Text>
                                        <Text>{item.role}</Text>
                                    </ClientWrapper>
                                </FeedbackContainer>
                            </FeedbackWrapper>
                        </SwiperSlide>
                    )
                })}
            </SwipeFeedback>
        </Container>
    )
}

export default Card