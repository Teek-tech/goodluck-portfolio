import styled from 'styled-components'
// import { motion } from 'framer-motion'


export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
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
    font-size: 0.9em;
    
    a{
        text-decoration: none;
        color: var(--white);
        font-family: var(--font-stack-3);
    }

    a:first-child{
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        
    }

    a:nth-child(2){
        position: absolute;
        top: 50%;
        right: -20px;
        transform: translateY(-50%);
    }

    a:nth-child(3){
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const StyledWheel = styled.div`
    position: relative;
    height: 60px;
    width: 60px;
    z-index: 3;

    /* ::before{
        content: "";
        

        } */

    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 2px solid var(--green);

        
    }

`

export const StyledPointer = styled.div`
        position: absolute;
        top: 50%;
        left: -30px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-right: 40px solid var(--green);
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        z-index: -2;
`