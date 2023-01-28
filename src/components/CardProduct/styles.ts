import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 10px;

  font-size: 14px;

  button {
    background: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.secondary.contrastText};
    width: 100%;
    border-radius: 0px;
    span {
      font-weight: bold;
    }

    &:hover {
      background: ${props => props.theme.palette.primary.main};
      opacity: 0.9;
    }
  }

  div.MuiCardContent-root {
    padding: 10px;
  }

  div.MuiPaper-root {
    border-radius: 8px;
  }

  div.MuiCardActions-root {
    padding: 0px;
  }

  div.MuiTypography-root {
    font-size: 16px;
  }

  p.MuiTypography-root {
    font-size: 12px;
  }
`;