import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a white label when white color is passed', () => {
    renderWithTheme(<Logo color="white" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black label when black color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a normal logo when size is not passed', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem',
    });
  });

  it('should render a normal logo when normal size is passed', () => {
    renderWithTheme(<Logo size="normal" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem',
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem',
    });
  });

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      }
    );
  });

  it('should render logo with the id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />);
    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument();
  });
});
