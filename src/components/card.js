import styled from "styled-components";
import { FlexContentColumn, FlexContentRow } from "./element";

const Wrapper = styled(FlexContentColumn)`
  max-width: 300px;
  border-radius: 20px;
  font-family: "GeliatBold";
  gap: 20px;
  padding: 20px;
  font-size: 24px;
  max-height: 500px;
  background: linear-gradient(
    155.14deg,
    rgba(255, 255, 255, 0) -2.13%,
    rgba(255, 255, 255, 0.15) 136.58%
  );
  filter: drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12));
`;
const UserInfo = styled(FlexContentRow)`
  width: 100%;
  gap: 20px;
`;
const UserInfoGroup = styled(FlexContentColumn)`
  align-items: flex-start;
  gap: 10px;
`;
const UserInfoText = styled(FlexContentColumn)`
  align-items: flex-start;
  font-size: 16px;
`;
const UserInfoImage = styled.img`
  width: 70px;
  border-radius: 10px;
`;
const UserNftImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const Card = (props) => {
  return (
    <Wrapper>
      <UserNftImage src={props.nft} />
      <UserInfo>
        <UserInfoImage src={props.avatar} />
        <UserInfoGroup>
          <>{props.name}</>
          <UserInfoText>{props.role}</UserInfoText>
        </UserInfoGroup>
      </UserInfo>
    </Wrapper>
  );
};
export default Card;
