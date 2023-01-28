import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography 
} from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Container } from "./styles";

const CardProduct = () => {
  return(
    <Container>
      <Card sx={{ maxWidth: 220, maxHeight: 300 }}>
        <CardMedia
          component="img"
          height="100"
          image="/public/img/1.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apple Watch Series 4 GPS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Redesigned from scratch and completely revised.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
            COMPRAR
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default CardProduct;