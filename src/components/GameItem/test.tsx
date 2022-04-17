import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import GameItem from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Read Dead Redemption 2',
  price: '79.99 €',
};

describe('<GameItem />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(<GameItem {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );
    expect(screen.getByText('79.99 €')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the item with download link', () => {
    const downloadLink = 'https://link';
    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);
    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink);
  });
});
