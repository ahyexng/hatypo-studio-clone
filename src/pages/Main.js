import { styled } from "styled-components";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import Content from "../components/Content";
const Main = () => {
  return (
    <>
      <MainWrap>
        <Sidebar />
        <MessageList />
        <Content />
      </MainWrap>
    </>
  );
};

const MainWrap = styled.div`
  background-color: #f8f7fd;
  width: 1440px;
  height: 900px;
  display: flex;
`;
export default Main;
