import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 1rem;
    border: solid 1px #fff;
    border-top: 0;
    border-bottom: 0;
    width: 50%;
  
  h1 {
    margin-top: 80px;
    font-weight: 100;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }
  
  button[type="button"] {
    background: black;
    border: 1px solid white;
  }

  .formContainer {
    display:flex
  }
  .formContainerControl {
    padding:0 .5rem;
    width:20%
  }

  .buttonGroup{
    text-align: right;
  }

  
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 4px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }
  
  button,
  input[type="submit"] {
    background: transparent;
    color: white;
    text-transform: capitalize;
    border: solid 2px #fff;
    margin: 14px 6px 0;
    padding: 5px 0;
    display: inline-block;
    width: 90px;
    font-family: 'BentonSans';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
  }
  
  button {
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
  }

  input[type="submit"].primary {
    background: #fff;
    color: #019292
  }
  
  input[type="submit"]:hover {
    background: #4DB2B2;
    color: #ffffff;
  }
  
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
  
  input:disabled {
    opacity: 0.4;
  }
  
  input[type="button"]:hover {
    transition: 0.3s all;
  }
  
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }


`;

export const InputField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #ffffff;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;