import FaqComponent from "../../components/faq";
import styled from "styled-components";
import { FlexContentRow, FlexContentColumn } from "../../components/element";
import Team from "../../components/team";
import Vision from "../../components/vision";
import Coin from "../../components/coin";
import Main from "../../components/main";
const Wrapper = styled(FlexContentRow)`
  background-color: #1a202c;
  color: white;
`;
const WrapperContent = styled(FlexContentColumn)`
  max-width: 1440px;
  width: 100%;
  padding: 100px 100px;
  margin: auto;
  gap: 100px;
  @media screen and (max-width: 1000px) {
    padding: 100px 50px;
  }
  @media screen and (max-width: 500px) {
    padding: 100px 10px;
  }
`;
const GeneralContent = styled(FlexContentColumn)`
  gap: 50px;
`;
const GeneralText = styled(FlexContentRow)`
  justify-content: center;
  font-size: 70px;
`;
const FaqContent = styled(FlexContentColumn)`
  gap: 30px;
`;
const Home = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <Main id="mint" />
        <GeneralContent>
          <GeneralText id="vision">OUR VISION</GeneralText>
        </GeneralContent>
        <Coin />
        <GeneralContent>
          <GeneralText id="about">About Us</GeneralText>
          <Team />
        </GeneralContent>
        <GeneralContent>
          <GeneralText id="faq">FAQS</GeneralText>
          <FaqContent>
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
            <FaqComponent
              title="What is POWER.INC NFT"
              text=" Every Power Black Box holder will be given the opportunity to open
          their box (burn) and reveal a character (mint) from the RENGA universe
          via a burn-to-mint mechanism. Aside from the cost of gas, there will
          be no additional fees to open your box, and the option to open your
          box and reveal your character will be available until there are no
          remaining boxes."
            />
          </FaqContent>
        </GeneralContent>
      </WrapperContent>
    </Wrapper>
  );
};
export default Home;
