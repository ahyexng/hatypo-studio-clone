import { styled } from "styled-components";

const MessageList = () => {
  return (
    <>
      <MsgListWrap>
        <MsgListHeader>
          <h1>Messages</h1>
        </MsgListHeader>
      </MsgListWrap>
    </>
  );
};

const MsgListWrap = styled.div`
  background-color: pink;
  width: 400px;
  height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 500px;
`;
const MsgListHeader = styled.div``;
export default MessageList;
