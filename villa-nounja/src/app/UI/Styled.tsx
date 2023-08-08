import styled from "styled-components";
import { Container, Card, CardContent, CardMedia } from "@mui/material";
import { StyledComponentProps } from "styled-components";

interface ContainerProps {
  width: number;
  height: number;
}



export const myContainer = styled(Container)<ContainerProps & StyledComponentProps<typeof Container, any, {}, never>>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  object-fit: contain;
`;



export const HouseCard = styled.div<any>`
  display: flex;
  flex-direction: row;

  @media (min-width: 768px !important) {
    .HouseCard {
      width: 100%;
    }
  }
`;

export const HouseCardContent = styled(CardContent)`
width: 100%;
`;

export const Image = styled(CardMedia)`
width: 70%;
hieght: 50%;
justify-content: center;
align-items: center;
`

export const HouseCardIcons = styled.div`
  display: flex;
`;

export const HouseCardIcon = styled.div`
  margin-right: 8px;
`;

export const RightColumnContent = styled.div`
  height: 320px;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`;
export const RightColumnOverlay = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 16px;
  text-align: center;
  z-index: 1000;
`;

export const HouseCardMedia = styled(CardMedia) <{ selected: boolean }>`
  height: 100px;
  position: relative;

  &:after {
    content: '';
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ selected }) => (selected ? 'transparent' : 'rgba(0, 0, 0, 0.5)')};
  }
`;

// ...
