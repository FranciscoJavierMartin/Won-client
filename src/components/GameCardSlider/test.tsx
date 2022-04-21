import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import GameCardSlider from '.';

const items = [
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: '99,99 €',
    promotionalPrice: '79,99 €',
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: '99,99 €',
    promotionalPrice: '79,99 €',
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: '99,99 €',
    promotionalPrice: '79,99 €',
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: '99,99 €',
    promotionalPrice: '79,99 €',
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: '99,99 €',
    promotionalPrice: '79,99 €',
  },
  {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: '99,99 €',
    promotionalPrice: '79,99 €',
  },
];

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render white arrows if color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} />);
    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA',
    });

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
