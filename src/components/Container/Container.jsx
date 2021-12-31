import PropTypes from 'prop-types'
import { StyledWrapper } from './styles';

const Container = ({children, margin}) => {
    return (
        <StyledWrapper margin={margin}>
            {children}
        </StyledWrapper>
    );
}
 
export default Container;


Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    // margin: PropTypes.bool.isRequired
}