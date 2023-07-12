import { styled } from "styled-components";
import Activity from "../assets/activity.png";
import Memoticon from "../assets/profile.png";
import Clogo from "../assets/clogo.png";
import Bubble from "../assets/bubble.png";
import Call from "../assets/call.png";
import File from "../assets/file.png";
import Grid from "../assets/grid.png";
import Group from "../assets/group.png";
import Setting from "../assets/setting.png";
import { Switch, Route, NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [navStyle, setNavStyle] = useState(0);
  const handleNavStyle = (id) => {
    setNavStyle(id);
  };
  return (
    <>
      <Menu>
        <Nav>
          {NAV_ITEMS.map(({ id, iconName, path }) => {
            return (
              <NavList
                key={id}
                onClick={() => handleNavStyle(id)}
                changeNavStyle={navStyle === id}
              >
                <NavLink to={`${path}`}>
                  <img src={iconName} />
                </NavLink>
              </NavList>
            );
          })}
        </Nav>
        <NavLast>
          <img src={Memoticon} alt="profile-icon" />
        </NavLast>
      </Menu>
    </>
  );
};

const NAV_ITEMS = [
  {
    id: 1,
    iconName: Clogo,
    path: "/1",
  },
  {
    id: 2,
    iconName: Activity,
    path: "/2",
  },
  {
    id: 3,
    iconName: Bubble,
    path: "/main",
  },
  {
    id: 4,
    iconName: Call,
    path: "/4",
  },
  {
    id: 5,
    iconName: Group,
    path: "/5",
  },
  {
    id: 6,
    iconName: Grid,
    path: "/6",
  },
  {
    id: 7,
    iconName: File,
    path: "/7",
  },
  {
    id: 8,
    iconName: Setting,
    path: "/8",
  },
];

const Menu = styled.div`
  background-color: #faf4c0;
  margin: 20px 20px;
  height: 780px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

const Nav = styled.ul``;
const NavList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: gray;
  background-color: ${(props) => (props.changeNavStyle ? "#FFB2D9" : "")};
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
    background-color: white;
    border-radius: 25px;
  }
  margin-bottom: 30px;
`;

export default Sidebar;
