import styled from 'styled-components'

export const StyledTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border-radius: 50%;
    border: 1px solid ${props => props.active ? props.color : 'transparent'};
    cursor: pointer;
    ${(props) => !props.active && props.inActiveStyle}
    
    :first-child{
        margin-left: 0;
    }
    
    :last-child{
        margin-right: 0;
    }

    :hover{
        border: 1px solid ${props => props.color ? props.color : null};
        /* svg{
            stroke: none;
            stroke: ${props => props.color ? '#000' : null};
            fill: ${props => props.color ? '#000' : null}
        } */

    }
`

export const StyledTabsWrapper = styled.div`
    margin: 20px 0;
    
`

export const StyledTabs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const inActiveTab = {
    opacity: 0.65
}

export const StyledTabPanel = styled.div`
    
`