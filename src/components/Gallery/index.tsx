import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import Slider, { SliderSettings } from '@/components/Slider';
import * as S from './styles';
import { useState } from 'react';

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <img
            src={item.src}
            alt={`Thumb - ${item.label}`}
            key={item.src}
            role="button"
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>
      <S.Modal
        isOpen={isOpen}
        aria-label="modal"
        aria-hidden={!isOpen}
      ></S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
