import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "20%" : "5%")};
  max-width: 280px;
  min-width: 80px;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
  background-image: linear-gradient(
      315deg,
      rgba(255, 132, 120, 0.7) 0%,
      rgba(255, 132, 137, 0.8) 74%
    ),
    url(${(p) => p.BackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative; // toggle
  transition: 0.2s ease-in-out all;
`;

// Header Item------------------------------------
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  transition: 0.2s ease-in all;
  border-bottom: 1px solid rgba(215, 129, 106, 0.8);
`;

export const Logo = styled.img`
  width: 30px;
`;
// Header Item------------------------end------------
export const Title = styled.h3`
  margin-left: 20px;
  font-size: 1.5rem;
  color: #fff;
`;

export const MenuItems = styled.div`
  padding: 10px 0px;
`;

// SidebarMenuItem View -------------------------------
export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
text-align: center;
${p.selected && "Background: rgba(0,0,0,.4)"};
`}
  position:relative; // drop down
  padding: 8px 20px;
  cursor: pointer;
  white-space: nowrap;
  color: ${(p) => (p.selected ? "rgba(255, 255, 255, 1)" : "rgba(22, 46, 49)")};

  &:after {
    content: "";
    border: 1px solid
      ${(p) =>
        p.selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 132, 120, 0.5)"};
    display: block;
    margin-top: 2px;
  }
  &:hover {
    &:after {
      border: 1px solid rgba(255, 255, 255, 1);
      transition: 0.2s ease-in;
    }
    color: rgba(255, 255, 255, 1);
  }
`;

export const Icon = styled.img`
  height: 16px;
  fill: rgba(255, 255, 255, 0.2);
  ${(p) =>
    p.isSidebarOpen &&
    ` padding-right:20px; transition: 0.2s ease-in  padding-right; `}
`;

export const MenuTitle = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline;" : "none;")};
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.5px;
  transition: 0.2s ease-in;
`;

export const DropDown = styled.span`
  position: absolute;
  display: inline;
  right: 26px;
  top: ${(p) => (p.isOpen ? "16px" : "12px")};
  padding: 4px;
  border: 1px solid
    ${(p) => (p.selected ? "rgba(255, 255, 255, 1)" : "rgba(22, 46, 49)")};
  transform: ${(p) => (p.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  border-width: 0 1px 1px 0;
  transition: 0.4s;
`;

// SidebarMenuItem View ----------------end---------------

// ToggleButton-------------------------------------------
export const TogglerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10%;
  margin: 0 auto;
  overflow: hidden;
  width: 50%;
`;
export const Toggle = styled.div`
  position: relative;
  height: 40px;
  cursor: pointer;

  &:after {
    content: "";
    border: 1px solid rgba(255, 132, 120, 1);
    position: absolute;
    top: 0.35rem;
    right: 0;
    left: 0;
    width: 100%;
    box-shadow: 1px 0.75rem rgba(255, 132, 120, 1),
      1px 1.5rem rgba(255, 132, 120, 1);
  }
  &:hover {
    &:after {
      border: 1px solid rgba(255, 255, 255, 1);

      box-shadow: 1px 0.75rem rgba(255, 255, 255, 1),
        1px 1.5rem rgba(255, 255, 255, 1);
      transition: 0.3s ease-in;
    }
  }
`;
// ToggleButton---------------------------end----------------

// Sidebar subMenu item--------------------------------------
export const SubMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(p) => (p.isSidebarOpen ? "0px 55px" : "0px 0px")};
  ${(p) => !p.isSidebarOpen && `align-items: center;`};
`;
export const SubMenuItem = styled.div`
  padding: 3px 0;
  cursor: pointer;
  color: ${(p) => (p.selected ? "rgba(255, 255, 255, 1)" : "rgba(22, 46, 49)")};
  &:hover {
    color: #fff;
  }
`;

// Sidebar subMenu item------------------end--------------------
