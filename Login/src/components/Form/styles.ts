import { styled } from "styled-components";

export const Form = styled.div`
  margin-top: 4rem;

  button {
    display: flex;

    justify-content: center;
    align-items: center;
    padding: 1.6rem 2.4rem;

    background: #7c3aed;
    border-radius: 0.4rem;

    width: 100%;

    font-weight: bold;
    color: #ffffff;

    margin-block: 3.2rem;
  }

  button:focus {
    outline: 0.2rem solid black;
    border-radius: 0.2rem;
  }

  button:hover {
    background: #9f67ff;
  }
`

export const CreateAccountContainer = styled.div`
  color: #475569;
`