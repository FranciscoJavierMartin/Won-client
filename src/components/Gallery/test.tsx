import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Gallery from '.';
import items from './mock';

describe('<Gallery />', () => {
  xit('should render the heading', () => {
    const { container } = renderWithTheme(<Gallery items={items} />);

    expect(
      screen.getByRole('heading', { name: /Gallery/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
