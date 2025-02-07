import { motion } from "framer-motion";
import styled from "styled-components/macro";

import {
  ScrollBarStyle,
  BorderedPill,
  InputOrButtonBorderStyleType2,
} from "../../style/mixins";
import Button from "../Button/Button";
import {
  InfoSubHeading,
  InfoHeading,
  FormLabel,
} from "../Typography/Typography";
import TransactionLink from "./subcomponents/TransactionLink/TransactionLink";

export const Container = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 24rem;
  height: 100vh;
  min-height: 100%;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.black};
  border-left: 1px solid ${(props) => props.theme.colors.borderGrey};
  top: 0;
  right: 0;
  z-index: 1001;
  will-change: transform;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const WalletHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  margin: 1.5rem 0;
`;

export const StyledTransactionLink = styled(TransactionLink)`
  justify-self: flex-end;
  margin-left: auto;

  &:hover {
    color: ${(props) => props.theme.colors.alwaysWhite};
  }
`;

export const LegendContainer = styled.div<{ $isVisible?: boolean }>`
  position: relative;
  margin-bottom: ${({ $isVisible }) => ($isVisible ? "1rem" : "0")};
  width: 100%;
  height: ${({ $isVisible }) => ($isVisible ? "1rem" : "0")};
  overflow: hidden;
  transition: height ease-out 0.3s, margin-bottom ease-out 0.3s;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Legend = styled(InfoSubHeading)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.lightGrey};

  &:after {
    margin: 0 0 0 0.5rem;
    background: ${(props) => props.theme.colors.borderGrey};
    height: 1px;
    flex: 1;
    content: "";
  }

  &:before {
    background: none;
  }
`;

export const LegendLine = styled.span`
  background: transparent;
`;

type TransactionsContainerProps = {
  $overflow: boolean;
};

export const TransactionsContainer = styled.div<TransactionsContainerProps>`
  ${ScrollBarStyle};

  overflow-y: ${(props) => (props.$overflow ? "scroll" : "hidden")};
  padding-right: ${(props) => (props.$overflow ? "1rem" : "0")};

  flex-grow: 99;
  height: 100%;
`;

export const TransactionContainer = styled.div<{ $isEmpty?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
  margin-bottom: ${({ $isEmpty }) => ($isEmpty ? "0" : "1rem")};
  width: 100%;
  transition: margin-bottom ease-out 0.3s;
  overflow: hidden;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NoTransactions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4.5rem;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const DiconnectButtonContainer = styled.div`
  padding: 1rem 0;
`;

export const DisconnectButton = styled(Button)`
  ${InputOrButtonBorderStyleType2};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  width: 2.5rem;
  min-height: 2.5rem;
  background-color: rgb(110, 118, 134, 0.1);
  color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 50%;
`;

export const BackButton = styled(motion.button)`
  ${InputOrButtonBorderStyleType2};

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -1.5rem;
  top: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black};
  color: ${({ theme }) =>
    theme.name === "dark" ? theme.colors.white : theme.colors.primary};
`;

export const NetworkInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 5.5rem;
  margin-left: 1rem;
`;

export const NetworkName = styled(FormLabel)`
  text-transform: uppercase;
`;

export const Balances = styled(InfoHeading)`
  line-height: 1;
`;

export const WalletInfoButton = styled.button`
  ${BorderedPill}
  ${InputOrButtonBorderStyleType2}
`;

export const ConnectionStatusCircle = styled.div<{ $connected: boolean }>`
  margin-right: 0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${(props) =>
    props.$connected ? props.theme.colors.green : props.theme.colors.red};
  border-radius: 50%;
`;
