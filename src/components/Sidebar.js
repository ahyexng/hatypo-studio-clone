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
import { Switch, Route, NavLink } from "react-router-dom";
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
            <NavLink to="/content" activeClassName="active">
              {" "}
              <MdOutlineGroups size="25" />
            </NavLink>
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
  opacity: 0.5;
  height: 37px;
  width: 40px;
  border-radius: 10px;
  img {
    height: 25px;
  }
  a {
    a.active {
      background-color: blue;
    }
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
