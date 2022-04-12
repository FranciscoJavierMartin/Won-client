import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined';
import { renderWithTheme } from '@/utils/tests/helpers';
import Button from '.';

describe('<Button />', () => {
  it('should render medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render medium size', () => {
    renderWithTheme(<Button size="medium">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
  });

  it('should render large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.0rem',
      'font-size': '1.6rem',
    });
  });

  it('should not render a fullWidth version when property is not passed', () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).not.toHaveStyle({
      width: '100%',
    });
  });

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render a version with icon at the left side', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should not render the icon when it is not passed', () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });

  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    );

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5',
    });

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover',
      }
    );
  });
});
