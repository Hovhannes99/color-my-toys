import {ReactNode} from "react";
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';


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
                600: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                1500: {
                    slidesPerView: 3.2,
                    spaceBetween: 40,
                },
            }}
            modules={[Pagination]}
            className="feedback-swipe"
        >
            {children}
        </Swiper>
    )
}

export default SwipeFeedback