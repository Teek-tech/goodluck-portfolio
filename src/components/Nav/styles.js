import styled from 'styled-components'
// import { motion } from 'framer-motion'


export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`

export const StyledLogo = styled.div`
    margin-bottom: 5px;
`

export const StyledNav = styled.nav`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 250px;
    font-family: var(--font-stack-4);
    text-transform: capitalize;
    font-size: 0.8em;
    margin-top: -20px;
    
    a{
        text-decoration: none;
        color: var(--white);
        font-family: var(--font-stack-3);
    }

    a:first-child{
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        
    }

    a:nth-child(2){
        position: absolute;
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
    }

    a:nth-child(3){
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const StyledWheel = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
    z-index: 3;
    border-radius: 50%;
    border: 2px solid var(--green);

    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }

`

export const StyledPointer = styled.div`
        position: absolute;
        top: 50%;
        left: -30px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-right: 20px solid var(--green);
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        z-index: -2;
`

export const StyledOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(255, 63, 109, 0.68), rgba(255, 63, 109, 0.68)), linear-gradient(0deg, rgba(255, 63, 109, 0.52), rgba(255, 63, 109, 0.52)), linear-gradient(0deg, #FF3F6D, #FF3F6D);
    z-index: 4;
    border-radius: 50%;
`
