import { Button } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box m={8}>
      <Button href="/products" variant="contained" size="large">
        Bay
      </Button>
    </Box>
  );
};

export default Home;
