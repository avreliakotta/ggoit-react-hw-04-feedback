import { Info } from "./Notification.styled";
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {


    return (
        <Info>{message}</Info>
    )
}
Notification.propTypes = {
      message: PropTypes.string,
  }   
