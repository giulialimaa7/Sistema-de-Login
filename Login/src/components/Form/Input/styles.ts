import { styled } from "styled-components";

export const InputContainer = styled.div`
  position: relative;

  margin-bottom: 18px;

  ::placeholder {
    color: #94a3b8;
  }
  
  section{
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2.1rem;
    }

    label {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: #1e293b;
    }
  }

  input {
    width: 100%;

    background: #ffffff;
    border: 0.1rem solid #e2e8f0;
    border-radius: 0.4rem;

    padding: 1.6rem 1.2rem;

    margin-top: 0.8rem;

    font-size: 1.4rem;
    line-height: 2.1rem;

    color: #1e293b;
  }

  input:focus,
  input:hover {
    border: 0.1rem solid #7c3aed;
    outline: 0;
  }

  input:disabled {
    opacity: 0.35;
  }

  img {
    width: 10%;
    object-fit: cover;
  }

  .eye {
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 55%;
    right: 5%;
  }
`