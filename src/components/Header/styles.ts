import styled from 'styled-components';

export const Container = styled.div`
  background-color: #019292;
  border: 1px solid #EBEBEB;
  border-radius: 12px;
  margin: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-family: 'BentonSans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #FFFFFF;
  }
  p {
    color:white
  }

  .logo,.lastULpdate {
    width:25%;
    padding .5rem 1rem;
    color:white;
    font-family: 'BentonSans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
  }
  .logo{
    max-width: 225px;
  }
  .lastULpdate {
    max-width: 310px;
  }
`
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #ffffff;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;