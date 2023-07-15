import { styled } from "styled-components";
import Clogo from "../assets/icons/clogo.png";
import ProfileList from "../components/ProfileList";
const Profile = () => {
  return (
    <>
      <ProfileWrap>
        <ProfileHeader>
          <img src={Clogo} />
          <h1>Ahyeong Studio</h1>
          <p>Create something New</p>
        </ProfileHeader>
        <ProfileList />
      </ProfileWrap>
    </>
  );
};

const ProfileWrap = styled.div`
  background-color: white;
  width: 350px;
  height: 780px;
  margin: 20px 10px 0 20px;
  border-radius: 10px;
  padding: 25px;
  overflow: scroll;
`;
const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  img {
    height: 70px;
    width: 70px;
    border-radius: 40px;
    background-color: pink;
    padding: 10px;
  }
  h1 {
    margin: 12px;
    font-size: 20px;
    font-weight: 600;
  }
  p {
    color: gray;
    font-size: 14px;
    font-weight: 400;
  }
`;
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
export default Profile;
