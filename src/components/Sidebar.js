import { styled } from "styled-components";
import Activity from "../assets/icons/activity.png";
import Memoticon from "../assets/icons/profile.png";
import Clogo from "../assets/icons/clogo.png";
import Bubble from "../assets/icons/bubble.png";
import Call from "../assets/icons/call.png";
import File from "../assets/icons/file.png";
import Grid from "../assets/icons/grid.png";
import Group from "../assets/icons/group.png";
import Setting from "../assets/icons/setting.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [navStyle, setNavStyle] = useState(0);
  const handleNavStyle = (id) => {
    setNavStyle(id);
  };
  return (
    <>
      <SidebarWrap>
        <Side>
          <ul>
            {NAV_ITEMS.map(({ id, iconName, path }) => {
              return (
                <NavList
                  key={id}
                  onClick={() => handleNavStyle(id)}
                  changeNavStyle={navStyle === id}
                >
                  <Link to={`${path}`}>
                    <img src={iconName} />
                  </Link>
                </NavList>
              );
            })}
          </ul>
          <NavLast>
            <img src={Memoticon} alt="profile-icon" />
          </NavLast>
        </Side>
      </SidebarWrap>
    </>
  );
};

const NAV_ITEMS = [
  {
    id: 1,
    iconName: Clogo,
    path: "/",
  },
  {
    id: 2,
    iconName: Activity,
    path: "/",
  },
  {
    id: 3,
    iconName: Bubble,
    path: "/",
  },
  {
    id: 4,
    iconName: Call,
    path: "/",
  },
  {
    id: 5,
    iconName: Group,
    path: "/",
  },
  {
    id: 6,
    iconName: Grid,
    path: "/",
  },
  {
    id: 7,
    iconName: File,
    path: "/",
  },
  {
    id: 8,
    iconName: Setting,
    path: "/",
  },
];

const SidebarWrap = styled.div`
  padding: 20px;
  width: 90px;
`;
const Side = styled.div`
  height: ${({ theme }) => theme.height};
  width: 90px;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;
const NavList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: gray;
  background-color: ${({ changeNavStyle, theme }) =>
    changeNavStyle ? theme.colors.PINK : ""};
  border-radius: 10px;
  height: 45px;
  width: 45px;
  img {
    height: 20px;
    width: 20px;
  }
`;
const NavLast = styled.div`
  img {
    height: 40px;
    background-color: ${({ theme }) => theme.colors.PINK};
    border-radius: 25px;
  }
  margin-bottom: 30px;
`;

export default Sidebar;
