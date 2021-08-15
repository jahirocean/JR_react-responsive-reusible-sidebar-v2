import React, { useEffect, useState } from "react";
import * as s from "./Sidebar.styles";
import { motion, AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const { sidebarItemData = [] } = props;
  const BackgroundImage = "/images/mountain.jpg";
  const history = useHistory();
  // state
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selected, setSelected] = useState(sidebarItemData[0].name);
  const [header, setHeader] = useState({
    fullName: "",
    shortName: "",
    logo: "",
  });
  const [subMenuState, setSubMenuState] = useState({});

  // handleItemSelect
  const handleItemSelect = (name, index) => {
    setSelected(name);

    const subMenuStateCopy = JSON.parse(JSON.stringify(subMenuState));
    if (subMenuState.hasOwnProperty(index)) {
      subMenuStateCopy[index]["isOpen"] = !subMenuStateCopy[index]["isOpen"];
      setSubMenuState(subMenuStateCopy);
    } else {
      for (let item in subMenuState) {
        subMenuStateCopy[item]["isOpen"] = false;
        subMenuStateCopy[item]["selected"] = null;
      }
      setSubMenuState(subMenuStateCopy);
    }
    history.push(sidebarItemData[index].to);
  };

  // handleSubmenuItem
  const handleSubmenuItem = (MainMenuIndex, subMenuIndex) => {
    const subMenuStateCopy = JSON.parse(JSON.stringify(subMenuState));
    subMenuStateCopy[MainMenuIndex]["selected"] = subMenuIndex;
    setSubMenuState(subMenuStateCopy);
    history.push(
      `${sidebarItemData[MainMenuIndex].to}${sidebarItemData[MainMenuIndex].subMenuItems[subMenuIndex].to}`
    );
  };
  // handleToggle
  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Effect

  // set subMenu item state
  useEffect(() => {
    const newSubMenuItems = {};
    sidebarItemData.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItems.length;
      if (hasSubmenus) {
        newSubMenuItems[index] = {};
        newSubMenuItems[index]["isOpen"] = false;
        newSubMenuItems[index]["selected"] = null;
      }
    });
    setSubMenuState(newSubMenuItems);
  }, [sidebarItemData]);

  console.log(subMenuState);

  // Update sidebar state
  useEffect(() => {
    const updateSidebar = () => {
      if (window.innerWidth < 1224 && isSidebarOpen) setSidebarOpen(false);
      else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", updateSidebar);

    return () => window.removeEventListener("resize", updateSidebar);
  }, [isSidebarOpen]);

  // Update Sidebar Header state
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(
          () => setHeader({ fullName: "Yo Yo ", logo: "/icons/logo.png" }),
          100
        )
      : setHeader({ fullName: "", logo: "/icons/logo.png", shortName: "Yo" });
  }, [isSidebarOpen]);
  // SidebarMenuItem View
  const sidebarItemJsx = sidebarItemData.map((item, index) => {
    const hasSubmenuItem = item.subMenuItems.length !== 0;
    const isSelected = item.name === selected;
    const isOpen = subMenuState[index]?.isOpen;

    const subMenuItemJsx = item.subMenuItems.map(
      (subMenuItem, SubMenuIndex) => {
        const isSubMenuIatemSelected =
          subMenuState[index]?.selected === SubMenuIndex;
        return (
          <s.SubMenuItem
            onClick={() => handleSubmenuItem(index, SubMenuIndex)}
            key={SubMenuIndex}
            selected={isSubMenuIatemSelected}
          >
            {subMenuItem.name}
          </s.SubMenuItem>
        );
      }
    );
    return (
      <>
        <s.MenuItem
          onClick={() => handleItemSelect(item.name, index)}
          isSidebarOpen={isSidebarOpen}
          key={index}
          selected={isSelected}
        >
          <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
          <s.MenuTitle selected={isSelected} isSidebarOpen={isSidebarOpen}>
            {item.name}
          </s.MenuTitle>
          {hasSubmenuItem && isSidebarOpen && (
            <s.DropDown selected={isSelected} isOpen={isOpen} />
          )}
        </s.MenuItem>
        <AnimatePresence>
          {hasSubmenuItem && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4 }}
            >
              <s.SubMenuItems isSidebarOpen={isSidebarOpen}>
                {subMenuItemJsx}
              </s.SubMenuItems>
            </motion.nav>
          )}
        </AnimatePresence>
      </>
    );
  });
  return (
    <s.SidebarContainer
      isSidebarOpen={isSidebarOpen}
      BackgroundImage={BackgroundImage}
    >
      <s.Header>
        {isSidebarOpen ? (
          <>
            {header.logo && <s.Logo src={header.logo} />}
            {header.fullName && <s.Title>{header.fullName}</s.Title>}
          </>
        ) : (
          <>{header.logo && <s.Logo src={header.logo} />}</>
        )}
      </s.Header>
      <s.MenuItems>{sidebarItemJsx}</s.MenuItems>
      <s.TogglerContainer onClick={handleToggle}>
        <s.Toggle />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
}

export default Sidebar;
