import { Title } from './Section.styled.js';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
    return(
    <div>
        <Title>{title}</Title>
        {children}
        </div>
    )    
}
Section.propTypes = {
    title: PropTypes.string,
}
