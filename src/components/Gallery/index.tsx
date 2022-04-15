import { useEffect, useState, useRef } from 'react';
import SlickSlider from 'react-slick';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from '@styled-icons/material-outlined';
import Slider, { SliderSettings } from '@/components/Slider';
import * as S from './styles';

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
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
  const slider = useRef<SlickSlider>(null);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <S.Wrapper>
      <Slider settings={settings} ref={slider}>
        {items.map((item, index) => (
          <img
            src={item.src}
            alt={`Thumb - ${item.label}`}
            key={`Thumb - ${index}`}
            role="button"
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>
      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
          <S.Content>
            <Slider settings={modalSettings} ref={slider}>
              {items.map((item, index) => (
                <img
                  src={item.src}
                  alt={item.label}
                  key={`Gallery - ${index}`}
                  onClick={() => setIsOpen(true)}
                />
              ))}
            </Slider>
          </S.Content>
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
