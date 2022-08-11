import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  TotalFeetback,
  PositiveFeedback,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <FeedbackList>
        <FeedbackItem>
          <span>Good:</span>
          {good}
        </FeedbackItem>
        <FeedbackItem>
          <span>Neutral:</span>
          {neutral}
        </FeedbackItem>
        <FeedbackItem>
          <span>Bad:</span>
          {bad}
        </FeedbackItem>
      </FeedbackList>
      <TotalFeetback>Total: {total}</TotalFeetback>
      <PositiveFeedback>
        Positive feedback: {positivePercentage}
      </PositiveFeedback>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
