import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle tht open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0,
    });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({
      opacity: 1,
    });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0,
    });
  });

  it('should shown register box when user is logged out', () => {
    renderWithTheme(<Menu />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(screen.queryByText(/My Account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
  });

  it('should shown wishlist and account when user is logged in', () => {
    renderWithTheme(<Menu username="John" />);
    expect(screen.getByText(/My Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
    expect(screen.queryByTestId(/Sign In/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId(/Sign Up/i)).not.toBeInTheDocument();
  });
});
