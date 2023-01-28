import { Container, H1 } from "./styles";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";

interface IHeader {
  quantityProducts: number;
}

const Header = ({quantityProducts}: IHeader) => {
  return(
    <Container>
      <H1>MKS <span>Sistemas</span></H1>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
        <span>{quantityProducts}</span>
      </Button>
    </Container>
  );
}

export default Header;