import { renderWithTheme } from '@/utils/tests/helpers';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = renderWithTheme(
      <Checkbox label="Checkbox label" labelFor="check" />
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/Checkbox label/i)).toHaveAttribute('for', 'check');
    expect(container.firstChild).toMatchSnapshot();
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

  it('should dispatch onCheck when status changes (initial not checked)', async () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status change (initial checked)', async () => {
    const onCheck = jest.fn();
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab key', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);
    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
