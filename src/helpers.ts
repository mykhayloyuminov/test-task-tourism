import { keyword } from 'color-convert';
import { KEYWORD } from 'color-convert/conversions';

export const getGradientColors = (houseColours: string) => {
  const [gradientFromResponse, , gradientToResponse] = houseColours.split(' ');
  try {
    const from =
      '#' + keyword.hex(gradientFromResponse.toLowerCase() as KEYWORD);
    const to = '#' + keyword.hex(gradientToResponse as KEYWORD);
    return {
      from,
      to,
    };
  } catch (error) {
    return {
      from: '#fff',
      to: '#000',
    };
  }
};
