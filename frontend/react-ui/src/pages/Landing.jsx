import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkTree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #333;
  font-size: 24px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, border 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    border: 2px solid #333;
  }
`;

const Landing = () => {
    return (
        <LinkTree>
            <LinkItem to="create">Create Ad</LinkItem>
            <LinkItem to="check">Check Ads</LinkItem>
            <LinkItem to="update">Update Ad</LinkItem>
            <LinkItem to="delete">Delete Ad</LinkItem>
        </LinkTree>
    );
};

export default Landing;
