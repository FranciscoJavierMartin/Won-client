import { renderWithTheme } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import Auth from '.';

describe('<Auth />', () => {
  it('should render logos, title and children', () => {
    const { container } = renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    );

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming platform/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /Auth title/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
