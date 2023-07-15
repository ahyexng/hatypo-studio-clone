import { styled } from "styled-components";
import dummy from "../assets/data/msgListData.json";
import Clogo from "../assets/icons/clogo.png";
import ArrowDown from "../assets/icons/arrowDown.png";
const ProfileList = () => {
  return (
    <>
      <MemberWrap>
        <MemberHeader>
          <p>MemberList</p>
          <img src={ArrowDown} />
        </MemberHeader>
        {dummy.MemberList.map((item) => {
          return (
            <MemberList>
              <img src={item.profile} />
              <p>{item.name}</p>
            </MemberList>
          );
        })}
      </MemberWrap>
      <MemberWrap>
        <MemberHeader>
          <p>AttachmentsList</p>
          <img src={ArrowDown} />
        </MemberHeader>
        {dummy.AttachmentsList.map((item) => {
          return (
            <MemberList>
              <img src={item.profile} />
              <p>{item.name}</p>
            </MemberList>
          );
        })}
      </MemberWrap>
    </>
  );
};
const MemberWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const MemberHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin-bottom: 10px;
  img {
    margin-right: 10px;
    height: 40px;
    width: 40px;
  }
  p {
    font-weight: 600;
    font-size: 18px;
  }
`;
const MemberList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  p {
    margin-left: 10px;
    font-weight: 600;
  }
  img {
    padding: 7px;
    border-radius: 25px;
    background-color: #ffd9ec;
    height: 40px;
    width: 40px;
  }
`;
export default ProfileList;
