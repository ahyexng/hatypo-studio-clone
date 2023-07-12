import { styled } from "styled-components";
import MessageList from "../components/MessageList";
const Main = () => {
  return (
    <>
      <MainWrap>
        <MessageList />
      </MainWrap>
    </>
  );
};

const MainWrap = styled.div`
  background-color: #f8f7fd;
  width: 1440px;
  height: 900px;
`;
export default Main;
