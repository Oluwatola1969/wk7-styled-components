import styled from "styled-components";

export const StyledHero = styled.div`
background: linear-gradient(135deg, #5b8fb9, #ff6b6b);
color:white;
height: 85vh;
margin:0;

.container{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center; 
    height: 85vh;
}

.hero--text{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    
}

`

export const  HeroTitle= styled.h1`
     h2{
        font-size:2rem;
     }
`

export const  HeroText= styled.p`
     p{
        font-size: 1.2rem;
        max-width: 800px;
    }
`