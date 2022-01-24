import React from 'react'
import Video from '../../videos/chroma.mp4'
import { HeroContainer,VideoBg,HeroBg } from './HeroElements'
const Vedio= (props) => {
    
    return (
        <>

        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay muted  src={Video} type='video/mp4'/> 
            </HeroBg>
        </HeroContainer>
        
        </>
    )
}

export default Vedio
