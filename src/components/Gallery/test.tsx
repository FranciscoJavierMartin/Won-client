import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Gallery from '.';
import items from './mock';

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    const { container } = renderWithTheme(
      <Gallery items={items.slice(0, 2)} />
    );

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', items[0].src);

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', items[1].src);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />);
    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it('should handle close modal when overlay or click on button', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />);
    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );

    fireEvent.click(screen.getByRole('button', { name: /Close modal/i }));

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
  });

  it('should handle close modal when ESC key is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={items.slice(0, 2)} />
    );
    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    );

    fireEvent.keyUp(container, { key: 'Escape' });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' });
  });
});
