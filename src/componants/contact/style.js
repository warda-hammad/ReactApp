import styled from "styled-components";
export const Drop = styled.div`
  padding: 50px 0;
  text-align: center;
`;

export const DropTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: normal;
`;

export const Form = styled.form`
  width: 70%;
  margin: auto;
  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  border: none;
  background: #eee;
  padding: 15px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;
export const FormInput = styled.div`
  overflow: hidden;
`;

export const InputText = styled(Input)`
  float: left;
  width: 49%;
`;

export const InputEmail = styled(Input)`
  float: right;
  width: 49%;
`;
export const SubInput = styled(Input)`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`;

export const InputSubmit = styled.input`
  width: 60%;
  background: #ccc;
  outline: none;
  border: none;
  padding: 10px;
  color: #888;
  cursor: pointer;
`;
