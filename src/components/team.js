import Card from "./card";
import NFT1 from "../assets/image/vision.png";
import Avatar1 from "../assets/image/avatar1.png";
import styled from "styled-components";
import { FlexContentRow } from "./element";
const Wrapper = styled(FlexContentRow)`
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;
const Team = () => {
  return (
    <Wrapper>
      <Card nft={NFT1} avatar={Avatar1} name="John son" role="CEO" />
      <Card nft={NFT1} avatar={Avatar1} name="John son" role="CEO" />
      <Card nft={NFT1} avatar={Avatar1} name="John son" role="CEO" />
      <Card nft={NFT1} avatar={Avatar1} name="John son" role="CEO" />
      <Card nft={NFT1} avatar={Avatar1} name="John son" role="CEO" />
      <Card nft={NFT1} avatar={Avatar1} name="John son" role="CEO" />
    </Wrapper>
  );
};
export default Team;
