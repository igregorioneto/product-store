import styled from "styled-components";

export const Container = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;

  background: ${props => props.theme.palette.primary.main};

  button {
    border: 1px solid ${props => props.theme.palette.primary.main};
    background: ${props => props.theme.palette.secondary.contrastText};
    span {
      color: ${props => props.theme.palette.secondary.main};
      font-weight: bold;
    }

    &:hover {
      background: ${props => props.theme.palette.secondary.contrastText};
      opacity: 0.9;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: bold;

  span{
    font-size: 20px;
    font-weight: normal;
    color: white;
  }
`