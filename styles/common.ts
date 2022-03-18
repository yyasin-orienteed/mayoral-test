import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)`
  && {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
      align-items: center;
      flex-direction: column;
      border-bottom: 1px solid #707070;
    }
  }
`;
export const Order1 = styled(Box)`
  margin-top: 10px;
  && {
    @media (max-width: 600px) {
      order: 1;
    }
  }
`;
export const Order2 = styled(Box)`
  && {
    flex: 0 0 60%;
    @media (max-width: 600px) {
      order: 2;
      align-self: stretch;
      margin-bottom: 30px;
    }
  }
`;
