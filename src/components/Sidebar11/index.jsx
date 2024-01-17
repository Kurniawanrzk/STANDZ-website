import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar11 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[38px] md:h-auto mt-[3px] object-cover w-1/5"
          src="images/img_home71686071.png"
          alt="home71686071"
        />
      ),
      label: "HOME",
      href: "/sellerhomepagewithmenupanel",
      active: window.location.pathname === "/sellerhomepagewithmenupanel",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mt-1 object-cover w-[33px]"
          src="images/img_time949631.png"
          alt="time949631"
        />
      ),
      label: "HISTORY",
      href: "/buyerhistorywprofile",
      active: window.location.pathname === "/buyerhistorywprofile",
    },
    {
      icon: (
        <Img
          className="absolute h-[33px] left-[35%] object-cover top-[15%] w-[33px]"
          src="images/img_linkedin3800006.png"
          alt="linkedin3800006"
        />
      ),
      label: "<>JOB<br />VACANCIES</>",
    },
    {
      icon: (
        <Img
          className="h-[33px] md:h-auto mb-[17px] object-cover w-[13%]"
          src="images/img_screenshot2024.png"
          alt="screenshot2024"
        />
      ),
      label: "YOUR LAND",
      href: "/selleryourlandwithmenu",
      active: window.location.pathname === "/selleryourlandwithmenu",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="md:h-[129px] h-[142px] md:ml-[0] ml-[62px] mr-[58px] mt-7 relative w-[55%]">
          <Img
            className="absolute h-[101px] inset-x-[0] mx-auto object-cover top-[0] w-[81%]"
            src="images/img_standzlogo.png"
            alt="standzlogo"
          />
          <Text
            className="absolute bottom-[0] inset-x-[0] italic mx-auto text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-max"
            size="txtK2DExtraBoldItalic36"
          >
            STANDZ
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "3px",
              gap: "23px",
              marginTop: "39px",
              color: "#000000",
              fontWeight: 700,
              fontFamily: "Kanit",
              borderColor: "transparent",
              borderWidth: "1px",
              borderStyle: "solid",
              borderRadius: "20px",
              [`&:hover, &.ps-active`]: {
                borderColor: "#000000ff",
                backgroundColor: "#6d5ae072 !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mb-[324px] mt-[211px] pl-[33px] pr-[30px] pt-1 sm:px-5 w-[77%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
