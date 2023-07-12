import { styled } from "styled-components";
import Post from "../assets/post.png";
import Search from "../assets/search.png";
import Pinned from "../assets/pinned.png";
import { useState } from "react";
import dummy from "../assets/data/msgListData.json";
// import Olaf from "../assets/olaf.png";
// import Kuromi from "../assets/kuromi.png";
// import Jerry from "../assets/jerry.png";
// import Pikachu from "../assets/pikachu.png";
const MessageList = () => {
  const [text, setText] = useState("");
  return (
    <>
      <MsgListWrap>
        <MsgListHeader>
          <h1>Messages</h1>
          <HeaderImg>
            <img src={Post} alt="msgListHeaderIcon" />
          </HeaderImg>
        </MsgListHeader>
        <MsgSearch>
          <MsgSearchForm>
            <img src={Search} alt="msgListSearchIcon" />
            <MsgInput value={text} placeholder="Search..."></MsgInput>
          </MsgSearchForm>
        </MsgSearch>
        <PinnedMsg>
          <PinnedP>
            <img src={Pinned} alt="msgListPinnedIcon" /> Pinned Message
          </PinnedP>
          {dummy.PinnedMsg.map((item, index) => {
            return (
              <PinnedMsgBox>
                {/* <img src={`src/assets/${item.profile}`} /> */}
                <MsgName>{item.name}</MsgName>
                <MsgContent>{item.content}</MsgContent>
              </PinnedMsgBox>
            );
          })}
        </PinnedMsg>
        <AllMsg></AllMsg>
      </MsgListWrap>
    </>
  );
};

const MsgListWrap = styled.div`
  background-color: white;
  width: 330px;
  height: 780px;
  margin: 20px 35px 0;
  border-radius: 10px;
  padding: 25px;
`;
const MsgListHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: pink;
    font-weight: 900;
    font-size: 30px;
  }
`;
const HeaderImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  height: 45px;
  width: 45px;
  background-color: #f8f7fd;
  img {
    height: 20px;
    width: 20px;
    opacity: 0.5;
  }
`;
const MsgSearch = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  background-color: #f8f7fd;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const MsgSearchForm = styled.form`
  display: flex;
  align-items: center;
  img {
    height: 23px;
    width: 23px;
    margin: 10px;
    opacity: 0.5;
  }
`;
const MsgInput = styled.input`
  border: none;
  background-color: #f8f7fd;

  &::placeholder {
    color: #d5d5d5;
    font-size: 15px;
  }
`;
const PinnedMsg = styled.div`
  display: flex;
  flex-direction: column;
`;
const PinnedP = styled.p`
  font-size: 13px;
  color: gray;
  width: 110px;
  margin-bottom: 4px;
  img {
    height: 12px;
    width: 12px;
    opacity: 0.5;
    margin-right: 4px;
  }
`;
const PinnedMsgBox = styled.div`
  height: 50px;
  text-align: left;
  img {
    border-radius: 25px;
    height: 36px;
    width: 36px;
    margin: 7px;
    float: left;
  }
`;
const MsgName = styled.h1`
  font-weight: 800;
  width: 180px;
  padding: 9px 0 6px 55px;
`;
const MsgContent = styled.p`
  width: 400px;
  font-size: 12px;
  padding-left: 55px;
  color: green;
`;
const AllMsg = styled.div``;
export default MessageList;
