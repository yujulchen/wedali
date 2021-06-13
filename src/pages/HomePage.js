import styled from "styled-components";

const HomePage = ({ className }) => {
  return (
    <div className={className}>
      <div>Home page</div>
    </div>
  );
};

const styledElement = styled(HomePage)`
  padding: 70px 260px;
  & div {
    background-color: #ccc;
    height: 100vh;
  }
`;

export default styledElement;
