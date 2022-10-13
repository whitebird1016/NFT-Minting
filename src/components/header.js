import { useState, useRef } from "react";
import styled from "styled-components";
import { FlexContentRow, FlexContentColumn } from "./element";
import { FaServer, FaWallet, FaTimes } from "react-icons/fa";
const Wrapper = styled(FlexContentRow)`
  background-color: #171923;
  color: white;
`;
const WrapperContent = styled(FlexContentRow)`
  max-width: 1440px;
  width: 100%;
  padding: 20px 100px;
  margin: auto;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    padding: 20px 50px;
  }
`;
const LogoContent = styled.a`
  font-size: 36px;
  color: #68d391;
  text-decoration: none;
`;
const MenuContent = styled(FlexContentRow)`
  font-size: 16px;
  gap: 70px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const MenuContentItem = styled.a`
  color: #ffffff;
  text-decoration: none;
`;
const MenuContent2 = styled(FlexContentColumn)`
  font-size: 16px;
  gap: 50px;
  width: 100%;
`;
const ButtonContent = styled(FlexContentRow)`
  background-color: #2f80ed;
  font-size: 18px;
  padding: 15px 30px;
  border-radius: 40px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const ButtonGroup = styled(FlexContentRow)`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    font-size: 30px;
    gap: 10px;
  }
`;
const DropdownMenu = styled(FlexContentRow)`
  position: absolute;
  background: #1a202c;
  top: 80px;
  padding: 30px;
  width: 200px;
  right: 0.0001px;
`;
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const mouseMenu = useRef(null);
  const toggleMenu = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };
  const closeOpenMenus = (e) => {
    if (mouseMenu.current && toggle && !mouseMenu.current.contains(e.target)) {
      setToggle(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <Wrapper>
      <WrapperContent>
        <LogoContent href="/public">power.inc</LogoContent>
        <MenuContent>
          <MenuContentItem href="/public#mint">Mint</MenuContentItem>
          <MenuContentItem href="/public#vision">vision</MenuContentItem>
          <MenuContentItem href="/public#about">About us</MenuContentItem>
          <MenuContentItem href="/public#faq">Faq</MenuContentItem>
        </MenuContent>
        <ButtonContent>connect</ButtonContent>
        <ButtonGroup>
          <FaWallet />
          {!toggle ? (
            <FaServer onClick={toggleMenu} />
          ) : (
            <FlexContentRow ref={mouseMenu}>
              <FaTimes onClick={toggleMenu} />
              <DropdownMenu>
                <MenuContent2>
                  <MenuContentItem href="/public#mint">Mint</MenuContentItem>
                  <MenuContentItem href="/public#vision">
                    vision
                  </MenuContentItem>
                  <MenuContentItem href="/public#about">
                    About us
                  </MenuContentItem>
                  <MenuContentItem href="/public#faq">Faq</MenuContentItem>
                </MenuContent2>
              </DropdownMenu>
            </FlexContentRow>
          )}
        </ButtonGroup>
      </WrapperContent>
    </Wrapper>
  );
};
export default Header;
