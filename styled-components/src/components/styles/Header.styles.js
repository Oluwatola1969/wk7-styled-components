import styled from "styled-components";

export const StyledHeader = styled.header`
width: 100%;
margin: 0 auto;
background-color: ${(props)=> props.bg};
padding: 5px 0;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
/* background-color:#5B8FB9; */
color:#333 ;

.logo{
    font-size:1.8rem;
    text-decoration: none;
}
ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

li{
    font-size: 1.2rem;
    transition: all 0.3ms ease-in-out;
    color:  #333;

    a:hover{
        color:#ff6b6b;
    }
    
}

a{
    text-decoration: none;
    color: #333;
}
`