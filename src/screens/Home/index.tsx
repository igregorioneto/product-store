import Header from "../../components/Header";
import ProductGrid from "../../components/ProductGrid";
import { Container } from "./styles";

const Home = () => {
  return(
    <Container>
      <Header />
      
      <ProductGrid />
    </Container>
  );
}

export default Home;