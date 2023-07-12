import { styled } from "styled-components";
import Sidebar from "../components/Sidebar";

const Main = () => {
  return (
    <>
      <MainWrap>
        <Sidebar />
      </MainWrap>
    </>
  );
};

const MainWrap = styled.div`
  background-color: pink;
  width: 1440px;
  height: 900px;
`;
export default Main;
