import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../Copmonents/Common/Card/Card";
import RemoveIcon from "@mui/icons-material/Remove";
import * as C from "../styles/common";

interface ProductDto {
  id: number;
  name: string;
  originalPrice: number;
  discount?: number;
  color: string;
  img: string;
}

interface ProductsProps {
  data?: ProductDto[];
}
const Products: React.FC<ProductsProps> = ({ data = [] }): JSX.Element => {
  const router = useRouter();
  const [columnNo, setColumnNo] = useState<number>(2);
  const [searchedValue, setSearchedValue] = useState<string>();

  useEffect(() => {
    if (router?.query?.search && typeof router.query.search === "string") {
      setSearchedValue(router.query.search);
    }
  }, []);

  useEffect(() => {
    if (searchedValue?.length) {
      router.push(`/products?search=${searchedValue}`);
    } else {
      router.push(`/products`);
    }
  }, [searchedValue]);

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta property="og:title" content="Products page " key="title" />
      </Head>
      <Container>
        <C.StyledBox mt={5} sx={{ display: "flex" }}>
          <C.Order2>
            <TextField
              fullWidth
              value={searchedValue}
              onChange={(e) => setSearchedValue(e.target.value)}
              id="input-with-icon-adornment"
            />
          </C.Order2>
          <C.Order1>
            <ButtonGroup disableElevation variant="contained">
              <IconButton  size='large' onClick={() => setColumnNo(2)} color="primary" aria-label="upload picture" component="span">
                <AddIcon />
              </IconButton>
              <IconButton onClick={() => setColumnNo(1)} color="primary" aria-label="upload picture" component="span">
                <RemoveIcon />
              </IconButton>
            </ButtonGroup>
          </C.Order1>
        </C.StyledBox>
        <Grid container spacing={2}>
          {data?.map<any>((item: any, key: number) => (
            <Grid key={item.name + key} item md={3} sm={4} xs={columnNo * 6}>
              <Card data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  // Fetch data from enternal API
  const res = await fetch(`http://localhost:3000/api/products?${query.search && `search=${query.search}`}`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Products;
