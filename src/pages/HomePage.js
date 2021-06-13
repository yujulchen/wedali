import styled from "styled-components";

const HomePage = ({ className }) => {
  return (
    <div className={className}>
      <div>Home page</div>
    </div>
  );
};

const styledElement = styled(HomePage)`
  padding: 0px 120px;
  width: 100vw;
  height: 70px;
`;

export default styledElement;
