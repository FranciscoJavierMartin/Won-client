import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from '@/utils/tests/helpers';
import UserDropdown from '.';

describe('<UserDropdown />', () => {
  it('should render username', () => {
    const { container } = renderWithTheme(<UserDropdown username="John Doe" />);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="John Doe" />);

    await userEvent.click(screen.getByText(/John Doe/i));

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
