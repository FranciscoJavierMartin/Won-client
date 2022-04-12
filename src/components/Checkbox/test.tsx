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

  it('should render with white label by default', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />);
    expect(screen.getByText(/Checkbox label/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render with white label when is passed explicitly', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="white" />
    );
    expect(screen.getByText(/Checkbox label/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" labelColor="black" />
    );
    expect(screen.getByText(/Checkbox label/i)).toHaveStyle({
      color: '#030517',
    });
  });
});
