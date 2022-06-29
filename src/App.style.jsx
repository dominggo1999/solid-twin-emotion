import { css } from '@emotion/css';
import tw from 'twin.macro';

export const Wrapper = css`
  ${tw`
    w-full 
    min-h-screen 
    flex 
    items-center 
    justify-center 
    flex-col
    text-xl 
    font-semibold
  `} 

  a{
    ${tw`
      text-blue-700
      underline 
    `}
  }
`;
