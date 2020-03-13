import styled from 'styled-components';

const Form = styled.form`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

input {
    width: 600px;
    border: 1px solid #ddd;
    height: 50px;
    padding: 0 20px;
    font-size: 14px;
  }
  button {
    width: 600px;
    height: 50px;
    font-size: 14px;
    background: #069;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #FFF;
    margin-top: 10px;
    cursor: pointer;
  }
  a,p{
    margin-top:5px;
    text-decoration: none;
  }
  label{
      color:white;
      font-weight: bold;
  }
`;

export default Form;