import styled from "styled-components";
import { FlexContentRow } from "./element";
import NFT from "../assets/image/nft.png";
import { Public_Mint } from "../config";
const Wrapper = styled(FlexContentRow)`
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;
const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 50px;
  font-size: 22px;
  font-family: "GeliatLight";
  align-items: flex-start;
  line-height: 30px;
  max-width: 575px;
`;
const WrapperTextTitle = styled.div`
  font-family: "FastHands";
  font-size: 70px;
  line-height: 81px;
`;
const WrapperTextColor = styled.span`
  color: #68d391;
`;
const MainImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const ButtonContent = styled(FlexContentRow)`
  background-color: #2f80ed;
  font-size: 18px;
  padding: 10px 30px;
  border-radius: 40px;
  font-family: "FastHands";
`;
const ButtonContent2 = styled.a`
  border: 1px solid #2f80ed;
  font-size: 18px;
  padding: 10px 50px;
  border-radius: 40px;
  font-family: "FastHands";
  text-decoration: none;
  color: white;
`;
const ButtonWrapper = styled(FlexContentRow)`
  gap: 20px;
`;
const Main = () => {
  return (
    <Wrapper>
      <WrapperText>
        <WrapperTextTitle>
          <WrapperTextColor>powerful</WrapperTextColor> nft vision
        </WrapperTextTitle>
        <>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.Lorem
          Ipsum has been the industry's standard dummy text ever since the Lorem
        </>
        <ButtonWrapper>
          <ButtonContent>Connect</ButtonContent>
          <ButtonContent2 href={Public_Mint}>Mint</ButtonContent2>
        </ButtonWrapper>
      </WrapperText>
      <MainImage src={NFT} />
    </Wrapper>
  );
};
export default Main;
