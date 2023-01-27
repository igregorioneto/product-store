import { Container, H1 } from "./styles";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";

const Header = () => {
  return(
    <Container>
      <H1>MKS <span>Sistemas</span></H1>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
        <span>0</span>
      </Button>
    </Container>
  );
}

export default Header;