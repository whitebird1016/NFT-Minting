import styled from "styled-components";
import { FlexContentRow, FlexContentColumn } from "../../components/element";
const Wrapper = styled(FlexContentRow)`
  height: 84.4vh;
  background-color: #1a202c;
  color: white;
`;
const WrapperContent = styled(FlexContentColumn)`
  max-width: 350px;
  width: 100%;
  margin: auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 50px 50px;
  height: 500px;
  justify-content: space-around;
`;
const WrapperTextTitle = styled.div`
  font-family: "FastHands";
  font-size: 45px;
  text-align: center;
`;
const WrapperTextFont = styled(FlexContentRow)`
  font-size: 30px;
  margin: 20px;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #ffffff;
`;
const WrapperTextColor = styled.span`
  color: #68d391;
`;
const ButtonContent = styled.button`
  border: 1px solid #2f80ed;
  font-size: 18px;
  font-family: "FastHands";
  text-decoration: none;
  color: white;
  justify-content: center;
  padding: 10px 20px;
  width: 100%;
  background-color: #1a202c;
`;
const Mint = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperTextTitle>
          mint your <WrapperTextColor>powerful</WrapperTextColor> nft
        </WrapperTextTitle>
        <FlexContentColumn>
          <WrapperTextFont>Price : 1 Eth</WrapperTextFont>
          <WrapperTextFont>Amount : + 100 -</WrapperTextFont>
          <WrapperTextFont>TotalPrice : 100 Eth</WrapperTextFont>
        </FlexContentColumn>
        <ButtonContent>Mint </ButtonContent>
      </WrapperContent>
    </Wrapper>
  );
};

export default Mint;
