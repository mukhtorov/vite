import styled from "styled-components";
import { ItemProp } from "./style";

const ItemWrapper = styled.div<ItemProp>`
  display: flex;
  flex-direction: column;
  height: auto;
  /* max-height: ${({ active }) => !active && "44px"};
  overflow: ${({ active }) => !active && "hidden"}; */
`;
