import 'match-media-mock';
import { renderWithTheme } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  xit('should render menu and footer', () => {
    const { container } = renderWithTheme(<Home />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Contact us/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  xit('should render sections', () => {
    renderWithTheme(<Home />);
    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Free games/i })
    ).toBeInTheDocument();
  });
});
