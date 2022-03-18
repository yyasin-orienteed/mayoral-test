import styled from "styled-components";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
interface CardmediaT {
  component: string;
  height: string;
  image: string;
  alt: string;
}
export const StyledCard = styled(Card)`
  && {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center ;
    padding: 20px;
    border-radius: 10px;
    width:100% ;
    box-shadow: rgb(27 25 90 / 15%) 2px 2px 8px;
    height: 600px;
  }
`;
export const StyledCardMedia = styled(CardMedia)<CardmediaT>`
  && {
    max-width: 345px;
    height: 200px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 345px;
    height: 200px;
  }
`;

export const StyledCardActions = styled(CardActions)`
  && {
    flex-direction: column;
  }
`;
