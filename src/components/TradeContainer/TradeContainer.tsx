import React, { FC, ReactElement } from "react";

import {
  BackgroundBlurriness,
  Container,
  StyledTradeContainer,
} from "./TradeContainer.styles";

type TradeContainerProps = {
  isOpen?: boolean;
};

const TradeContainer: FC<TradeContainerProps> = ({
  children,
  isOpen = false,
}): ReactElement => {
  return (
    <StyledTradeContainer isOpen={isOpen}>
      <BackgroundBlurriness />
      <Container>{children}</Container>
    </StyledTradeContainer>
  );
};

export default TradeContainer;
