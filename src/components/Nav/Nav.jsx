import { useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StyledWrapper, StyledLogo, StyledNav, StyledWheel, StyledPointer } from './styles';

import logo from '../../assets/icons/logo.svg'
import avatar from '../../assets/images/1.jpg'

const Nav = () => {


    const white = '#FFFFFF'
    const green = '#4ABC55'
    const pink = '#FF3F6D'
    const purple = '#816BFF'

    const [rotation, setRotation] = useState(0)
    const [nav1Color, setNav1color] = useState('')
    const [nav2Color, setNav2Color] = useState('')
    const [nav3Color, setNav3Color] = useState('')
    const [pointerColor, setPointerColor] = useState(green)
    const [wheelBorderColor, setWheelBorderColor] = useState()
    

    const rotateLeft = () =>{
        setRotation(0)
        setNav1color(green)
        setNav2Color(white)
        setNav3Color(white)
        setPointerColor(green)
        setWheelBorderColor(green)
    }

    const rotateRight = () =>{
        setRotation(-180)
        setNav2Color(purple)
        setNav3Color(white)
        setNav1color(white)
        setPointerColor(purple)
        setWheelBorderColor(purple)
    }

    const rotateDown = () =>{
        setRotation(-90)
        setNav2Color(white)
        setNav3Color(pink)
        setNav1color(white)
        setPointerColor(pink)
        setWheelBorderColor(pink)
    }


    return (
        <StyledWrapper>
            <StyledLogo>
                <img src={logo} alt="june" />
            </StyledLogo>
            <StyledNav>
                <Link to="/" style={{color: nav1Color}} onClick={rotateLeft}>about me</Link>
                <Link to="#" style={{color: nav2Color}} onClick={rotateRight}>resources</Link>
                <Link to="#" style={{color: nav3Color}} onClick={rotateDown}>portfolio</Link>
                <StyledWheel
                    as={motion.div} 
                    animate={{rotate: rotation}}
                    transition={{duration: 0.6}}
                >
                    <StyledPointer style={{borderRight: `40px solid ${pointerColor}`}} ></StyledPointer>
                    <img style={{border: `2px solid ${wheelBorderColor}`}} src={avatar} alt="user" />
                </StyledWheel>
            </StyledNav>
        </StyledWrapper>
    );
}

export default Nav;