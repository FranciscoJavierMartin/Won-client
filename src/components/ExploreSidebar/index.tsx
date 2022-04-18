import Checkbox from '@/components/Checkbox';
import Heading from '@/components/Heading';
import Button from '../Button';
import Radio from '../Radio';
import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ExploreSidebarProps = {};

const ExploreSidebar: React.FC<ExploreSidebarProps> = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Price
    </Heading>
    <Checkbox name="under-50" label="Under 20 €" labelFor="under-20" />
    <Checkbox name="under-50" label="Under 30 €" labelFor="under-30" />
    <Checkbox name="under-50" label="Under 40 €" labelFor="under-40" />
    <Checkbox name="under-50" label="Under 50 €" labelFor="under-50" />
    <Checkbox name="free" label="Free" labelFor="free" />
    <Checkbox name="discounted" label="Discounted" labelFor="discounted" />
    <Heading lineBottom lineColor="secondary" size="small">
      Sort by
    </Heading>
    <Radio
      id="high-to-low"
      name="sort-by"
      label="High to low"
      labelFor="high-to-low"
      value="high-to-low"
    />
    <Radio
      id="low-to-high"
      name="sort-by"
      label="Low to high"
      labelFor="low-to-high"
      value="low-to-high"
    />
    <Heading lineBottom lineColor="secondary" size="small">
      System
    </Heading>
    <Checkbox name="windows" label="Windows" labelFor="windows" />
    <Checkbox name="mac" label="Mac" labelFor="mac" />
    <Checkbox name="linux" label="Linux" labelFor="linux" />
    <Heading lineBottom lineColor="secondary" size="small">
      Genre
    </Heading>
    <Checkbox name="action" label="Action" labelFor="action" />
    <Checkbox name="adventure" label="Adventure" labelFor="adventures" />
    <Checkbox name="fps" label="FPS" labelFor="fps" />
    <Checkbox name="mmorpg" label="MMORPG" labelFor="mmorpg" />
    <Button fullWidth size="medium">
      Filter
    </Button>
  </S.Wrapper>
);

export default ExploreSidebar;
