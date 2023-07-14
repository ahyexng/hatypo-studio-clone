import { styled } from "styled-components";

const ProfileList = () => {
  return (
    <>
      <MemberWrap>
        <MemberHeader>
          <p>Members</p>
          <img src={Clogo} />
        </MemberHeader>
        <MemberList>
          <img src={Clogo} />
          <p>Kuromi</p>
        </MemberList>
        <MemberList>
          <img src={Clogo} />
          <p>Kuromi</p>
        </MemberList>
      </MemberWrap>
    </>
  );
};
const MemberWrap = styled.div`
  display: flex;
  flex-direction: column;
  img {
    padding: 5px;
    border-radius: 25px;
    background-color: skyblue;
    height: 40px;
    width: 40px;
  }
`;
const MemberHeader = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin-bottom: 10px;
  img {
    background-color: skyblue;
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
  }
`;
export default ProfileList;
