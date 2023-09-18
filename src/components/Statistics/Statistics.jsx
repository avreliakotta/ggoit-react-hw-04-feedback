
import { Feedback,StatisticsList } from "./Statistics.styled";
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
   
        <StatisticsList>
          <li>
            <Feedback>Good: {good}</Feedback>
          </li>
          <li>
            <Feedback>Neutral: {neutral}</Feedback>
          </li>
          <li>
            <Feedback>Bad: {bad}</Feedback>
          </li>
          <li>
            <Feedback>Total: {total}</Feedback>
          </li>
          <li>
            <Feedback>
              Positive feedback: {positivePercentage}%
            </Feedback>
          </li>
        </StatisticsList>
           
            </>
    )

}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage:PropTypes.number,

}