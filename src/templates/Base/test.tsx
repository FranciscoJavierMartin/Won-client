import { renderWithTheme } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import Base from '.';

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>;
    },
  };
});

jest.mock('@/components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    },
  };
});

describe('<Base />', () => {
  it('should render menu, foote and children', () => {
    const { container } = renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    );

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
