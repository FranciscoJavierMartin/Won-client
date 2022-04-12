import { renderWithTheme } from '@/utils/tests/helpers';
import { screen } from '@testing-library/react';
import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Checkbox label/i)).toBeInTheDocument();
  });
});
