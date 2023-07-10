import { styled } from "styled-components";
import { FcInfo } from "react-icons/fc";

const Sidebar = () => {
  return (
    <>
      <Menu>
        <Nav>
          <NavList>
            <FcInfo size="40" />
          </NavList>
          <NavList></NavList>
          <NavList></NavList>
          <NavList></NavList>
          <NavList></NavList>
          <NavList></NavList>
          <NavList></NavList>
        </Nav>
      </Menu>
    </>
  );
};

const Menu = styled.div`
  background-color: pink;
  margin: 40px 500px;
  height: 1000px;
  width: 140px;
  display: flex;
  justify-content: center;
`;

const Nav = styled.div``;
const NavList = styled.div``;
export default Sidebar;
