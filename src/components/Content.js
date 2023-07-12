import { styled } from "styled-components";
import Clogo from "../assets/icons/clogo.png";
import Kuromi from "../assets/images/kuromi.png";
import Pikachu from "../assets/images/pikachu.png";
import Kirby from "../assets/images/kirby.png";
import Seven from "../assets/images/seven.png";
import Face from "../assets/icons/face.png";
import More from "../assets/icons/more.png";
import Call from "../assets/icons/call.png";

const Content = () => {
  return (
    <>
      <ContentWrap>
        <ContentHeader>
          <HeaderProfile src={Clogo} />
          <HeaderMsg>
            <h1>Ahyeong Studio</h1>
            <p>We are the one</p>
          </HeaderMsg>
          <HeaderImgWrap>
            <HeaderImg src={Kuromi} />
            <HeaderImg src={Pikachu} style={{ left: "37px" }} />
            <HeaderImg src={Kirby} style={{ left: "54px" }} />
            <HeaderImg
              src={Seven}
              style={{ left: "71px", padding: "7px 10px 7px 10px" }}
            />
          </HeaderImgWrap>
          <HeaderIconWrap>
            <HeaderLastImg src={Face} />
            <HeaderLastImg src={Call} />
            <HeaderLastImg src={More} />
          </HeaderIconWrap>
        </ContentHeader>
        <ContentBox></ContentBox>
        <ContentForm>
          <FormWrap>
            <ContentInput placeholder="Type a message"></ContentInput>
            <InputIcon src={Face} style={{ marginRight: "5px" }} />
            <InputIcon src={Call} />
            <InputIcon src={More} />
          </FormWrap>
          <ContentBtn>btn</ContentBtn>
        </ContentForm>
      </ContentWrap>
    </>
  );
};

const ContentWrap = styled.div`
  background-color: white;
  width: 500px;
  height: 780px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;
`;
const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 70px;
`;
const HeaderProfile = styled.img`
  height: 40px;
  width: 40px;
  background-color: pink;
  border-radius: 25px;
  padding: 5px;
  margin-right: 20px;
`;
const HeaderMsg = styled.div`
  h1 {
    font-weight: 900;
    padding-bottom: 5px;
  }
  p {
    text-align: left;
    color: green;
    font-size: 14px;
  }
`;
const HeaderImgWrap = styled.div`
  background-color: white;
  margin-left: 50px;
  position: relative;
`;
const HeaderImg = styled.img`
  position: absolute;
  background-color: pink;
  border: 1px solid white;
  border-radius: 25px;
  top: -16px;
  left: 20px;
  height: 30px;
  width: 30px;
  padding: 5px;
`;
const HeaderIconWrap = styled.div`
  margin-left: auto;
`;
const HeaderLastImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  padding: 5px;
  margin-left: 3px;
  opacity: 0.5;
`;
const ContentBox = styled.div`
  background-color: #f8f7fd;
  height: 600px;
  border-radius: 10px;
`;
const ContentForm = styled.form`
  display: flex;
  margin-top: 13px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
`;
const ContentInput = styled.input`
  border: none;
  height: 50px;
  width: 400px;
  background-color: #f8f7fd;
  &::placeholder {
    color: #bdbdbd;
  }
`;
const FormWrap = styled.div`
  border-radius: 10px;
  background-color: #f8f7fd;
  display: flex;
  align-items: center;
  height: 60px;
  width: 390px;
  padding: 18px;
`;
const InputIcon = styled.img`
  height: 20px;
  width: 18px;
  margin-left: 8px;
  opacity: 0.5;
`;
const ContentBtn = styled.button`
  background-color: skyblue;
  height: 60px;
  width: 60px;
  margin-left: 10px;
  border-radius: 10px;
`;
export default Content;
