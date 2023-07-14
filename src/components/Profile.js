import { styled } from "styled-components";
import Clogo from "../assets/icons/clogo.png";

const Profile = () => {
  return (
    <>
      <ProfileWrap>
        <ProfileHeader>
          <img src={Clogo} />
          <h1>Ahyeong Studio</h1>
          <p>Create something New</p>
        </ProfileHeader>
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
`;
const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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

export default Profile;
