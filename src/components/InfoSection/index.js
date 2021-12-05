import React from "react";
import { Button } from "react-scroll";
import { InfoContainer } from "./InfoElements";

function InfoSection() {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Info</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Sub Title</Subtitle>
                <BtnWrap>
                  <Button to="/">Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection;
