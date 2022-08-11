import styled from '@emotion/styled';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Option = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #affcff;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 300ms linear;

  :hover,
  :focus {
    background-color: #28e8ef;
    color: #ffffff;
  }
`;
