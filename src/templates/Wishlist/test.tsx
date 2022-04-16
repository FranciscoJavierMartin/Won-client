import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Wishlist from '.';
import gamesMock from '@/components/GameCardSlider/mock';
import highlightMock from '@/components/Highlight/mock';

const props = {
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
};

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />);
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });
});