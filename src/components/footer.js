import styled from "styled-components";
import { FlexContentRow } from "./element";
import { SiTwitter, SiDiscord, SiGmail } from "react-icons/si";

const Wrapper = styled(FlexContentRow)`
  background-color: #2e3747;
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
const MenuContent = styled(FlexContentRow)`
  font-size: 16px;
  gap: 50px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const MenuIconContent = styled(FlexContentRow)`
  font-size: 20px;
  gap: 20px;
`;
const MenuContentItem = styled.a`
  color: #ffffff;
  text-decoration: none;
`;
const Footer = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <MenuContent>
          <MenuContentItem href="/public#mint">Mint</MenuContentItem>
          <MenuContentItem href="/public#vision">vision</MenuContentItem>
          <MenuContentItem href="/public#about">About us</MenuContentItem>
          <MenuContentItem href="/public#faq">Faq</MenuContentItem>
        </MenuContent>
        <MenuIconContent>
          <SiTwitter />
          <SiDiscord />
          <SiGmail />
        </MenuIconContent>
        <MenuContentItem>© 2022 by Infierno</MenuContentItem>
      </WrapperContent>
    </Wrapper>
  );
};
export default Footer;
