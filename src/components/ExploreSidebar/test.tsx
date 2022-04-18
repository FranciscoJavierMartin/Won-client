import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import ExploreSidebar from '.';

describe('<ExploreSidebar />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(<ExploreSidebar />);

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /system/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar />);
    expect(
      screen.getByRole('checkbox', { name: /under 50 €/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument();
  });

  it('should render filter button', () => {
    renderWithTheme(<ExploreSidebar />);
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });
});
