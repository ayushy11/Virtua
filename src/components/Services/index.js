import React from "react";
import Icon1 from "../../images/img4.svg";
import Icon2 from "../../images/img5.svg";
import Icon3 from "../../images/img6.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceElements";

function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual offices</ServicesH2>
            <ServicesP>
              You can access our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cashback.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
