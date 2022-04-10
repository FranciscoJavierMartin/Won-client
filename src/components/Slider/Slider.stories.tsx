import { ComponentMeta, Story } from '@storybook/react';
import { Settings } from 'react-slick';
import styled from 'styled-components';
import Slider, { SliderProps } from '.';

export default {
  title: 'Slider',
  component: Slider,
  args: {},
} as ComponentMeta<typeof Slider>;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Slider>
);

Horizontal.args = {
  settings,
};
const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1,
};

export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Slider>
);

Vertical.args = {
  settings: verticalSettings,
};
