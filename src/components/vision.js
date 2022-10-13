import styled from "styled-components";
import { FlexContentRow } from "./element";
import VisionAvatar from "../assets/image/vision.png";

const Wrapper = styled(FlexContentRow)`
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
`;
const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 20px;
  font-size: 22px;
  font-family: "GeliatLight";
  align-items: flex-start;
  line-height: 35px;
  max-width: 575px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
const WrapperTextTitle = styled.div`
  font-family: "FastHands";
  font-size: clamp(50px, 10vw, 70px);
  line-height: 81px;
`;
const WrapperTextColor = styled.span`
  color: #68d391;
`;
const VisionImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Vision = () => {
  return (
    <Wrapper>
      <div>
        <VisionImage src={VisionAvatar} />
      </div>

      <WrapperText id="vision">
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
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s
        </>
      </WrapperText>
    </Wrapper>
  );
};
export default Vision;
