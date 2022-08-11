import PropTypes from 'prop-types';
import { OptionsContainer, Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {Object.keys(options).map(key => (
        <Option type="button" key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </Option>
      ))}
    </OptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
