import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import bannersMock from '@/components/BannerSlider/mock';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/ mock';
import Home from '.';

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    const { container } = renderWithTheme(<Home {...props} />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    +expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/Defy death 1/i)).toHaveLength(1);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    expect(screen.getAllByText(/Read dead is back/i)).toHaveLength(3);
    expect(container.firstChild).toMatchSnapshot();
  });
});
