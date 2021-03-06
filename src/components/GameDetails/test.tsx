import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import GameDetails, { GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'FREE',
  genres: ['Role-playing', 'Narrative'],
};

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    const { container } = renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Release date/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rating/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Genres/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should render free rating when FREE', () => {
    renderWithTheme(<GameDetails {...props} />);
    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 3+ rating when pegi18', () => {
    renderWithTheme(<GameDetails {...props} rating="pegi3" />);
    expect(screen.getByText(/3+/i)).toBeInTheDocument();
  });

  it('should render 7+ rating when pegi7', () => {
    renderWithTheme(<GameDetails {...props} rating="pegi7" />);
    expect(screen.getByText(/7+/i)).toBeInTheDocument();
  });

  it('should render 12+ rating when pegi18', () => {
    renderWithTheme(<GameDetails {...props} rating="pegi12" />);
    expect(screen.getByText(/12+/i)).toBeInTheDocument();
  });

  it('should render 16+ rating when pegi18', () => {
    renderWithTheme(<GameDetails {...props} rating="pegi16" />);
    expect(screen.getByText(/16+/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when pegi18', () => {
    renderWithTheme(<GameDetails {...props} rating="pegi18" />);
    expect(screen.getByText(/18+/i)).toBeInTheDocument();
  });

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />);
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />);
    expect(screen.getByText('Walktrough')).toBeInTheDocument();
  });

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />);
    expect(screen.getByText('Different Tales')).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />);
    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });
});
