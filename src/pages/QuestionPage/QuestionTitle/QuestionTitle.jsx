import styled from "styled-components";

const QuestionTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 40px;
  font-size: 28px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    font-size: 22px;
  }
`;

export default QuestionTitle;