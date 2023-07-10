import { styled } from "styled-components";
import { FcInfo } from "react-icons/fc";
import { IoCallOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { HiOutlineFolderRemove } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import Activity from "../assets/activity.svg";
import Memoticon from "../assets/profile.png";
const Sidebar = () => {
  return (
    <>
      <Menu>
        <Nav>
          <NavList style={{ marginTop: "35px", opacity: 1 }}>
            <FcInfo size="30" />
          </NavList>
          <NavList>
            <img src={Activity} alt="activity-icon" />
          </NavList>
          <NavList>
            <IoChatbubbleEllipsesOutline size="25" />
          </NavList>
          <NavList>
            <IoCallOutline size="25" />
          </NavList>
          <NavList>
            <MdOutlineGroups size="25" />
          </NavList>
          <NavList>
            <CiGrid41 size="25" />
          </NavList>
          <NavList>
            <HiOutlineFolderRemove size="25" />
          </NavList>
          <NavList>
            <FiSettings size="25" />
          </NavList>
        </Nav>
        <NavLast>
          <img src={Memoticon} alt="profile-icon" />
        </NavLast>
      </Menu>
    </>
  );
};

const Menu = styled.div`
  background-color: pink;
  margin: 40px 500px;
  height: 1000px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

const Nav = styled.div``;
const NavList = styled.div`
  margin: 25px;
  opacity: 0.5;
  img {
    height: 25px;
  }
`;
const NavLast = styled.div`
  img {
    height: 40px;
    background-color: white;
    border-radius: 25px;
  }
  margin-bottom: 30px;
`;
export default Sidebar;
