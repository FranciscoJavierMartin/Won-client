import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import FormProfile from '.';

describe('<FormProfile />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(<FormProfile />);

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Password'));
    expect(screen.getByPlaceholderText('New Password'));

    expect(screen.getByRole('button', { name: /Save/i }));

    expect(container.firstChild).toMatchSnapshot();
  });
});
