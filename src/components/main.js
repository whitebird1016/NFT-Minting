import styled from "styled-components";
import { FlexContentRow } from "./element";
import NFT from "../assets/image/nft.png";
import { Public_Mint } from "../config";
import { useHistory } from "react-router-dom";
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
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const WrapperTextTitle = styled.div`
  font-family: "FastHands";
  line-height: 81px;
  font-size: clamp(50px, 10vw, 70px);
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
  cursor: pointer;
  font-family: "FastHands";
`;
const ButtonContent2 = styled.div`
  border: 1px solid #2f80ed;
  font-size: 18px;
  padding: 10px 50px;
  border-radius: 40px;
  font-family: "FastHands";
  text-decoration: none;
  cursor: pointer;
  color: white;
`;
const ButtonWrapper = styled(FlexContentRow)`
  gap: 20px;
`;
const Main = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push(Public_Mint);
  };
  return (
    <Wrapper>
      <WrapperText id="mint">
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
          <ButtonContent2 onClick={handleClick}>Mint</ButtonContent2>
        </ButtonWrapper>
      </WrapperText>
      <MainImage src={NFT} />
    </Wrapper>
  );
};
export default Main;
