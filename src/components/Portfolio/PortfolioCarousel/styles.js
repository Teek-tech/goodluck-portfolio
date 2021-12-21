import styled from 'styled-components'

export const StyledCard = styled.div`
    /* position: relative; */

    
`

export const StyledImage = styled.div`
    height: 180px;
    border-radius: 10px;
    position: relative;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`

export const StyledCardDescription = styled.div`
    h3{
        text-align: center;
        font-family: var(--font-stack-2);
        color: var(--white);
        margin-top: 8px;
    }

    p{
        font-family: var(--font-stack-2);
        margin-top: 10px;
        text-align: center;
    }
`

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
`