import styled from "styled-components";

const AdFormWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .form-row {
    margin-bottom: 0;
  }
  .form-label {
    display: flex;
    font-size: 0.875rem;
    margin-bottom: 17px;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .logo-register {
    display: flex;
    max-width: 120px;
    margin: 20px auto 140px;
  }
  .form-register {
    width: 90vw;
    max-width: 450px;
    border-top: 5px solid #110101;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding-inline: 40px;
    padding-top: 35px;
    padding-bottom: 35px;
    margin: 0 auto;
    transition: 0.3s ease-in-out all;
  }
  .form-input {
    width: 100%;
    padding: 12px 10px;
    border-radius: 0.25rem;
    background: #f0f4f8;
    border: 1px solid #bcccdc;
    margin-bottom: 15px;
  }
  .btn-register,
  input[type="submit"] {
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    padding: 12px;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    transition: all 0.4s ease-in-out;
  }
  .btn-register {
    border: solid 2px #fff;
    background-color: black;
    color: #fff;
  }
  .btn-register:hover {
    border: solid 2px #fff;
    opacity: 0.7;
    color: white;
  }
  .btn-choose-register {
    background: transparent;
    border: transparent;
    color: #1d4ed8;
    cursor: pointer;
    letter-spacing: 1px;
    font-family: ALSArtemiusSans, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 400;
  }
`;

export default AdFormWrapper;
