import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  width: 400px;
  margin: 0 auto;
  justify-content: space-around;
`;

export const FeedbackItem = styled.li`
  width: 100px;
  padding: 10px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  font-size: 20px;

  :nth-of-type(1) {
    color: green;
  }

  :nth-of-type(2) {
    color: orange;
  }

  :nth-of-type(3) {
    color: red;
  }

  span {
    display: block;
    margin-bottom: 7px;
  }
`;

export const TotalFeetback = styled.p`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  font-size: 18px;
`;

export const PositiveFeedback = styled.p`
  display: inline-block;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  font-size: 18px;
`;
