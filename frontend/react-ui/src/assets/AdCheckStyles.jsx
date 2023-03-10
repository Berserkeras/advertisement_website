import styled from "styled-components";

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(210, 36%, 96%);
    color: hsl(209, 61%, 16%);
  }
`

export const AdCheckStyles = styled.main`
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: Bold;
    font-style: normal;
  }


  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 0.875rem;
  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 1.25rem;
    color: hsl(209, 34%, 30%);
  }

  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .search-form {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  .form-input {
    width: 100%;
    border: transparent;
    max-width: 600px;
    background: #ffffff;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    color: hsl(209, 34%, 30%);
    letter-spacing: 0.1rem;
    margin-top: 1rem;
  }

  .error {
    color: hsl(360, 67%, 44%);
    text-transform: capitalize;
    padding-top: 0.5rem;
    letter-spacing: 0.1rem;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 3px solid #ccc;
    border-top-color: hsl(205, 78%, 60%);
    animation: spinner 0.6s linear infinite;
  }

  .ads {
    width: 90vw;
    max-width: 1170px;
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    padding-bottom: 5rem;
    padding-top: 3rem;
  }

  .advertisement {
    position: relative;
    overflow: hidden;
  }

  .advertisement img {
    width: 240px;
    height: 240px;
    display: block;
    object-fit: cover;
  }

  .ad-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.6);
    transform: translateY(100%);
    transition: all 0.3s linear;
  }

  .ad-info h4 {
    color: #dadada;
    margin-bottom: 0.25rem;
  }

  .ad-info p {
    margin-bottom: 0;
    color: #d3cece;
  }

  .advertisement:hover .ad-info {
    transform: translateY(0);
  }

  @media screen and (min-width: 576px) {
    .ads {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }

  .single-ad {
    width: 90vw;
    max-width: 1170px;
    margin: 4rem auto;
    display: grid;
    gap: 2rem;
  }

  .single-ad img {
    width: 100%;
    display: block;
  }

  .single-ad p {
    max-width: 35em;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    line-height: 1.8;
  }

  .btn {
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: hsl(205, 78%, 60%);
    color: #000000;
    border-radius: 0.25rem;
    display: inline-block;
    margin-top: 0.5rem;
    letter-spacing: 0.1rem;
  }

  @media screen and (min-width: 992px) {
    .single-ad {
      grid-template-columns: 1fr 2fr;
    }
  }

`;

export default AdCheckStyles;
