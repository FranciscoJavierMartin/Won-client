import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Profile from '.';

describe('<Profile />', () => {
  xit('should render component', () => {
    const { container } = renderWithTheme(<Profile />);

    expect(
      screen.getByRole('heading', { name: /Profile/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
