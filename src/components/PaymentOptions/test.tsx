import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import userEvent from '@testing-library/user-event';
import PaymentOptions from '.';
import cardsMock from './mock';

xdescribe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    );

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument();
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn()} />
    );

    userEvent.click(screen.getByLabelText(/4325/));
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked();
    });
  });
});