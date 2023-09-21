import styled from "styled-components";

export const Page= styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img{
    width: 50%;
    height: 100vh;
  }
  
  > div {
    padding: 4rem 12rem;
  }

  @media (max-width: 900px) {
    > * {
      width: 100%;
    }
    > img {
      display: none;
    }

    > div {
      padding: 11rem;
    }

    main {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    > div {
      padding: 4rem;
    }
  }

  ::-ms-reveal {
    display: none;
  }

`