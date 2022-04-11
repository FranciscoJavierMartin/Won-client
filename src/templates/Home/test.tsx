import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/ mock';
import Home from '.';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    const { container } = renderWithTheme(<Home {...props} />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />);
    expect(screen.getAllByText(/Defy death 1/i)).toHaveLength(1);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(20);
    expect(screen.getAllByText(/Read dead is back/i)).toHaveLength(3);
  });
});
