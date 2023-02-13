import styled from "styled-components";

const LandingWrapper = styled.main`
  
  
  
  .landingApplyBtn,
  input[type="submit"] {
    top: 40%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: initial;
    background-image: linear-gradient(#27f814 0, #317625 100%);
    border-radius: 5px;
    border-style: none;
    box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
    color: #151515;
    cursor: pointer;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 60px;
    line-height: 60px;
    margin-left: 14px;
    margin-right: 14px;
    outline: 0;
    text-align: center;
    text-decoration: none;

    transition: all .3s cubic-bezier(.05, .03, .35, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: bottom;
    width: 190px;
    justify-content: center;
    align-items: center;
  }

  .landingApplyBtn:hover {
    opacity: .7;
  }

  @media screen and (max-width: 1000px) {
    .landingApplyBtn {
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      width: 150px;
    }
  }

  .landingCheckBtn,
  input[type="submit"] {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: initial;
    background-image: linear-gradient(#8614f8 0, #760be0 100%);
    border-radius: 5px;
    border-style: none;
    box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
    color: #fff;
    cursor: pointer;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 60px;
    line-height: 60px;
    margin-left: 14px;
    margin-right: 14px;
    outline: 0;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: bottom;
    width: 190px;
  }

  .landingCheckBtn:hover {
    opacity: .7;
  }

  @media screen and (max-width: 1000px) {
    .landingCheckBtn {
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      width: 150px;
    }
  }

  .landingRemoveBtn,
  input[type="submit"] {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: initial;
    background-image: linear-gradient(#8614f8 0, #760be0 100%);
    border-radius: 5px;
    border-style: none;
    box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
    color: #fff;
    cursor: pointer;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 60px;
    line-height: 60px;
    margin-left: 14px;
    margin-right: 14px;
    outline: 0;
    text-align: center;
    transition: all .3s cubic-bezier(.05, .03, .35, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: bottom;
    width: 190px;
  }

  .landingCheckBtn:hover {
    opacity: .7;
  }

  @media screen and (max-width: 1000px) {
    .landingRemoveBtn {
      font-size: 14px;
      height: 55px;
      line-height: 55px;
      width: 150px;
    }
  }
`;
export default LandingWrapper;
