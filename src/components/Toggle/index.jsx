import React from 'react';
import { func, string } from 'prop-types';
import { ToggleContainer } from './styledComponents';

const Toggle = ({ theme, toggleTheme }) => (
  <div style={ { alignSelf: 'flex-end' } }>
    <ToggleContainer onClick={ toggleTheme }>
      {theme === 'light'
        ? <svg xmlns="http://www.w3.org/2000/svg" width="77" height="36" viewBox="0 0 77 36" fill="none">
        <rect width="77" height="36" rx="18" fill="black"/>
        <path d="M47.9618 18.79C47.8045 20.4922 47.1657 22.1144 46.1201 23.4668C45.0744 24.8192 43.6653 25.8458 42.0575 26.4265C40.4497 27.0073 38.7098 27.1181 37.0413 26.7461C35.3728 26.3741 33.8448 25.5345 32.636 24.3258C31.4273 23.117 30.5878 21.589 30.2157 19.9205C29.8437 18.252 29.9545 16.5121 30.5353 14.9043C31.116 13.2965 32.1426 11.8874 33.495 10.8418C34.8474 9.79614 36.4696 9.15731 38.1718 9C37.1752 10.3483 36.6957 12.0094 36.8203 13.6814C36.945 15.3534 37.6657 16.9251 38.8512 18.1106C40.0368 19.2961 41.6084 20.0168 43.2804 20.1415C44.9524 20.2662 46.6135 19.7866 47.9618 18.79Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="77" height="36" viewBox="0 0 77 36" fill="none">
        <rect x="0.5" y="0.5" width="76" height="35" rx="17.5" fill="white" stroke="black"/>
        <path d="M39 23C41.7614 23 44 20.7614 44 18C44 15.2386 41.7614 13 39 13C36.2386 13 34 15.2386 34 18C34 20.7614 36.2386 23 39 23Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39 7V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M39 27V29" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.22 10.22L32.64 11.64" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.3601 24.36L46.7801 25.78" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28 18H30" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M48 18H50" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.22 25.78L32.64 24.36" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M45.3601 11.64L46.7801 10.22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> /></svg>}
    </ToggleContainer>
  </div>
);

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
