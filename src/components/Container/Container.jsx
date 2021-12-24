import PropTypes from 'prop-types'
import { StyledWrapper } from './styles';

const Container = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
}
 
export default Container;


Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ])
}