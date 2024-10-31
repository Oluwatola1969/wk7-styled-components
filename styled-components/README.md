# React Styled-Components Learning 

Styled-Components is a library that lets us write CSS in Javascript to style react components. 

## Prerequisites
- Basic know;edge of react and css

## Usefulness of Styled-components

- Styled-ccomponents scope CSS to individual components, reducing the risk of style conflicts.
- It allows us to manage styling alongside logic.
- Dynamic styling with props
```javascript

const Button =styled.button`
    background: ${(props)=>{
        props.primary ? '#3498db' : '#ccc'
    }};
`
```

## Setting up styled-components


```bash
 npm install styled-components 
```

## About my project

The website is a simple page that includes the Nav section and an Hero section.

In the Project I made use of:

- Theme
- Nesting
- Styling based on Props
- Globalstyles


