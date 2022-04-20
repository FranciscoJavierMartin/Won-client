import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import CartDropdown from '.';
import itemsMock from '@/components/CartList/mock';

describe('<CartDropdown />', () => {
  it('should render CartIcon and its badge', () => {
    const { container } = renderWithTheme(
      <CartDropdown items={itemsMock} total="129.98 €" />
    );

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${itemsMock.length}`)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown items={itemsMock} total="129.98 €" />);
    expect(screen.getByText('129.98 €')).toBeInTheDocument();
    expect(screen.getByText(itemsMock[0].title)).toBeInTheDocument();
  });
});
