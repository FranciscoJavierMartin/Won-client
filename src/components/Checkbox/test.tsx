import { renderWithTheme } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/Checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    renderWithTheme(<Checkbox />);
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });
});
