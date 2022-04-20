import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import CartList from '.';
import itemsMock from './mock';

describe('<CartList />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(
      <CartList items={itemsMock} total="129.98 €" />
    );

    expect(screen.queryAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText('129.98 €')).toHaveStyle({ color: '#F231A5' });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button', () => {
    renderWithTheme(<CartList items={itemsMock} total="129.98 €" hasButton />);
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />);
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});
