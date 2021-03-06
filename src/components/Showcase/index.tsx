import GameCardSlider from '@/components/GameCardSlider';
import Heading from '@/components/Heading';
import Highlight, { HighlightProps } from '@/components/Highlight';
import { GameCardProps } from '../GameCard';
import * as S from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
  color?: 'black' | 'white';
};

const Showcase: React.FC<ShowcaseProps> = ({
  title,
  highlight,
  games,
  color = 'black',
}) => (
  <S.Wrapper>
    {title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {highlight && <Highlight {...highlight} />}
    {games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
);

export default Showcase;
