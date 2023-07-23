import { styled } from "styled-components";
import dummy from "../assets/data/msgListData.json";
import Pinned from "../assets/icons/pinned.png";
import AllMsg from "../assets/icons/allMsg.png";
const MsgListView = ({ isPinned }) => {
  const msgKind = {
    pinned: "Pinned Message",
    all: "All Message",
  };
  return (
    <>
      <MsgWrap>
        <MsgKind>
          <img src={isPinned ? Pinned : AllMsg} alt="msgListPinnedIcon" />{" "}
          {isPinned ? msgKind.pinned : msgKind.all}
        </MsgKind>
        {dummy.Msg.map((item) => {
          if (item.isPinned === isPinned)
            return (
              <MsgBox>
                <img src={item.profile} />
                <MsgTime>{item.time}</MsgTime>
                <MsgName>{item.name}</MsgName>
                <MsgContent>{item.content}</MsgContent>
              </MsgBox>
            );
        })}
      </MsgWrap>
    </>
  );
};
const MsgKind = styled.p`
  font-size: 13px;
  color: gray;
  width: 110px;

  display: flex;
  margin: 10px 0 15px 0;
  img {
    height: 12px;
    width: 12px;
    opacity: 0.5;
    margin-right: 5px;
  }
`;
const MsgWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const MsgName = styled.h1`
  font-weight: 800;
  width: 180px;
  padding: 9px 0 6px 60px;
`;
const MsgContent = styled.p`
  width: 300;
  font-size: 12px;
  padding-left: 15px;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.GREEN};
  text-overflow: ellipsis;
`;
const MsgTime = styled.p`
  float: right;
  padding-top: 7px;
  font-size: 12px;
  color: gray;
`;
const MsgBox = styled.div`
  height: 50px;
  text-align: left;
  margin-bottom: 10px;
  img {
    border-radius: 25px;
    height: 45px;
    width: 45px;
    float: left;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.PINK};
  }
`;

export default MsgListView;
