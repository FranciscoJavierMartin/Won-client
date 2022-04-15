import { Container } from '@/components/Container';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import * as S from './styles';

export type BaseProps = {
  children: React.ReactNode;
};

const Base: React.FC<BaseProps> = ({ children }) => (
  <S.Wrapper>
    <S.SectionMenu>
      <Menu />
    </S.SectionMenu>
    {children}
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
);

export default Base;
