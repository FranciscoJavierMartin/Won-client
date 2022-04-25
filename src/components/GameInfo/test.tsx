import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import GameInfo from '.';

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: 99.99,
};

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { name: /My Game Title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/99.99 €/)).toBeInTheDocument();
    expect(screen.getByText(/game description/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('shuld render buttons', () => {
    renderWithTheme(<GameInfo {...props} />);
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
