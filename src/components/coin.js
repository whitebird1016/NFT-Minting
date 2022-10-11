import styled from "styled-components";

import CoinImage from "../assets/image/coin.png";
const Wrapper = styled.img`
  height: auto;
  max-width: 100%;
`;
const Coin = () => {
  return <Wrapper src={CoinImage} />;
};
export default Coin;
