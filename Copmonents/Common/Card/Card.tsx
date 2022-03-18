import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import * as S from "./style";
interface CardProps {
  data: {
    id: number;
    name: string;
    originalPrice: number;
    discount?: number;
    color: string;
    img: string;
  };
}
const CardCom: React.FC<CardProps> = ({ data = {} }): JSX.Element => {
  return (
    <>
      <S.StyledCard>
        <S.StyledCardMedia component="img" height="140" image={data.img || "/images/jaket.jpg"} alt="green iguana" />
        <S.StyledCardContent>
          <Typography mb={8} gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography
            sx={{ textDecoration: data?.discount ? "line-through" : "none" }}
            variant="h5"
            color="text.secondary"
          >
            {data.originalPrice} $
          </Typography>
          {data?.discount && (
            <Typography variant="h5" color="red">
              {data?.originalPrice} $({data.discount * 100}%)
            </Typography>
          )}
        </S.StyledCardContent>
        <S.StyledCardActions>
          <Typography my={3} variant="h6" component='div' color="text.secondary">
           Multible Size
          </Typography>
          <Button variant="contained" size="small">
            Bay
          </Button>
        </S.StyledCardActions>
      </S.StyledCard>
    </>
  );
};
export default CardCom;
