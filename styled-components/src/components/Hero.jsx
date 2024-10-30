import React from 'react'
import { StyledHero, HeroTitle, HeroText } from './styles/Hero.styles'
import { Container } from './styles/Container.styles';
import StyledButton from './button.styled';




const Hero = () => {
  return (
    <>
    <StyledHero>
      <Container>
        <div className="container">
        <div className='hero--text'>
          <HeroTitle>Lorem ipsum dolor sit amet.</HeroTitle>
       
        <HeroText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, amet dolor similique rerum cum fugit aliquam labore, sunt delectus unde beatae voluptate voluptates?
        </HeroText>
        </div>

        <StyledButton>Read More</StyledButton>
        </div>
      </Container>
    </StyledHero>
    </>
  )
}

export default Hero