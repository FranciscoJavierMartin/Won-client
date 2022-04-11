import { Container } from '@/components/Container';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Menu from '@/components/Menu';
// import * as S from './styles';

export type HomeProps = {
  test?: boolean;
};

const Home: React.FC<HomeProps> = () => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        New
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
);

export default Home;
