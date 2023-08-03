import { styled } from "styled-components";
import Post from "../assets/icons/post.png";
import Search from "../assets/icons/search.png";
import { useState } from "react";
import MsgListView from "./MsgListView";

const MessageList = () => {
  const [text, setText] = useState("");
  const ChangeInput = (e) => {
    setText(e.target.value);
  };

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
            <MsgInput
              value={text}
              placeholder="Search..."
              onChange={ChangeInput}
            ></MsgInput>
          </MsgSearchForm>
        </MsgSearch>
        <MsgListView isPinned={true} />
        <MsgListView isPinned={false} />
      </MsgListWrap>
    </>
  );
};

const MsgListWrap = styled.div`
  background-color: white;
  width: 350px;
  height: ${({ theme }) => theme.height};
  margin: 20px 10px 0 30px;
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
    color: black;
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
  background-color: ${({ theme }) => theme.colors.GRAY};
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

export default MessageList;
