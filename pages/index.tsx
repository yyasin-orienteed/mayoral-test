import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Box m={8} style={{ textAlign: 'center'}}>
        <Button href="/products" variant="contained" size="large">
          Go To Product List Page
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
