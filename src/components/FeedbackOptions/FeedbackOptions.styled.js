import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  margin-bottom: 40px;
`;
export const FeedbackButton = styled.button`
  outline: none;
  background-color: #f8f8f8;
  border: none;
  border-radius: 6px;
  width: 60px;
  height: 25px;
  color: teal;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  &:hover,
  &:focus {
    background-color: blue;
    color: #f8f8f8;
  }
`;
