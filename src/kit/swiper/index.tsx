import {ReactNode} from "react";
import { Swiper } from 'swiper/react';


const SwipeFeedback = ({children}:{children:ReactNode}) => {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                dynamicBullets: false,
            }}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                400: {
                    slidesPerView: 1.5,
                    spaceBetween: 50,
                },
                550: {
                    slidesPerView: 1.5,
                    spaceBetween: 50,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 100,
                },
                800: {
                    slidesPerView: 2.5,
                    spaceBetween: 100,
                },
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1500: {
                    slidesPerView: 5.2,
                    spaceBetween: 100,
                },
            }}
            autoplay={true}
            className="feedback-swipe"
        >
            {children}
        </Swiper>
    )
}

export default SwipeFeedback