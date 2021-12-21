// import {useState} from 'react'
import { Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { StyledCard, StyledCardDescription, StyledOverlay, StyledImage } from './styles';
import { projects } from './data'

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/autoplay/autoplay.scss'; // Autoplay module
import 'swiper/modules/effect-coverflow/effect-coverflow.scss'; // Coverflow module

const PortfolioCarousel = () => {


    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
                "rotate": 0,
                "stretch": 0,
                "depth": 100,
                "modifier": 3,
                "slideShadows": false
            }}
            spaceBetween={60}
            slidesPerView={3}
            // autoplay={{"delay": 2500, "disableOnInteraction": false}}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            slideToClickedSlide={true}
            scrollbar={{ draggable: true }}
            >
                {
                    projects.map(project => (
                        <SwiperSlide key={project.id}>
                            {({isActive}) => (
                                <StyledCard active={isActive}>
                                    <StyledImage>
                                        <img src={project.img} alt={project.title} />
                                    </StyledImage>
                                    {isActive ? null : <StyledOverlay/>}
                                    {
                                        isActive ?
                                        <StyledCardDescription>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </StyledCardDescription>
                                        : null
                                    }
                                </StyledCard>
                            )}
                            
                        </SwiperSlide>
                    ))
                }
        </Swiper>
    );
}
 
export default PortfolioCarousel;