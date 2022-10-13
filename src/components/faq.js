import { useState } from "react";
import styled from "styled-components";
import { FlexContentColumn, FlexContentRow } from "./element";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Wrapper = styled(FlexContentColumn)`
  border-radius: 13px 13px 0px 0px;
  border: 1px solid #2f80ed;
`;

const WrapperContent = styled(FlexContentRow)`
  background-color: #3182ce;
  color: #ffffff;
  border-radius: 10px 10px 0px 0px;
  font-family: "GeliatBold";
  font-size: 36px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`;
const DropText = styled(FlexContentRow)`
  font-family: "GeliatLight";
  padding: 40px 80px;
  font-size: 24px;
  color: white;
  line-height: 2;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
    padding: 20px 40px;
  }
`;
const DropContent = styled(FlexContentRow)`
  justify-content: space-between;
  margin: 20px 60px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    margin: 20px 30px;
  }
`;

const FaqComponent = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <WrapperContent
        onClick={() => {
          open === false ? setOpen("true") : setOpen(false);
        }}
      >
        <DropContent>
          <FlexContentRow>{title}</FlexContentRow>
          <FlexContentRow>
            {!open ? <FaChevronDown /> : <FaChevronUp />}
          </FlexContentRow>
        </DropContent>
      </WrapperContent>
      {open && <DropText>{text}</DropText>}
    </Wrapper>
  );
};
export default FaqComponent;
