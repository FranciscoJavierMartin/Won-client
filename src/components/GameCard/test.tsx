import { renderWithTheme } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import theme from '../../styles/theme';
import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: '99,99 €',
};

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />);
    const price = screen.getByText('99,99 €');
    expect(price).not.toHaveStyle({ textDescription: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through in price when it is promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="79,99 €" />);
    expect(screen.getByText('99,99 €')).toHaveStyle({
      textDecoration: 'line-through',
    });
    expect(screen.getByText('79,99 €')).not.toHaveStyle({
      textDecoration: 'line-through',
    });
  });
});
