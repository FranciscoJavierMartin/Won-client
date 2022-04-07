import Link from 'next/link';
import Heading from '../Heading';
import Logo from '../Logo';
import * as S from './styles';

const Footer: React.FC = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>
        <a href="mailto:test@test.com">test@test.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Adress line 1</span>
        <span>Adress line 2</span>
        <span>Adress line 3</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2022 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
);

export default Footer;
