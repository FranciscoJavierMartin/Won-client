import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import OrdersList from '.';
import itemsMock from './mock';
import React from 'react';

jest.mock('@/components/GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>;
  },
}));

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />;
  },
}));

describe('<OrdersList />', () => {
  it('should render component with items', () => {
    const { container } = renderWithTheme(<OrdersList items={itemsMock} />);

    expect(
      screen.getByRole('heading', { name: /My orders/i })
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render empty state', () => {
    renderWithTheme(<OrdersList />);

    expect(
      screen.getByRole('heading', { name: /My orders/i })
    ).toBeInTheDocument();

    expect(screen.queryAllByTestId('Mock GameItem')).toHaveLength(0);
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
