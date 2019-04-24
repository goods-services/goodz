import theme from '@styles/theme';
import * as breakpoints from './breakpoints';
const {
  responsive,
} = theme;

const {
  mobile,
  tablet,
  desktop,
} = breakpoints;
/**
 * Determine if screen is mobile width
 * @return {boolean} whether or not viewport falls within the mobile breakpoints
 */
export const isMobile = () => {
  if (typeof window !== 'undefined' && window.visualViewport && window.visualViewport.width) {
    return window.visualViewport.width <= mobile.max;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth <= mobile.max;
  }
  return false;
};


/**
 * Get width of screen
 * @returns {number} width of the screen
 */
export const getWidth = () => {
  if (typeof window !== 'undefined' && window.visualViewport && window.visualViewport.width) {
    return window.visualViewport.width;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }
  return 0;
};

/**
 * Determine if screen is tablet width
 * @return {boolean} whether or not viewport falls within the tablet breakpoints
 */
export const isTablet = () => {
  if (typeof window !== 'undefined' && window.visualViewport && window.visualViewport.width) {
    return window.visualViewport.width <= tablet.max;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth <= tablet.max;
  }
  return false;
};

/**
 * Determine if screen is smaller than an arbitrary breakpoint
 * @param {int} bp breakpoint to check viewport against
 * @return {boolean} whether or not viewport is smaller than the given breakpoint
 */
export const customBreakpoint = (bp) => {
  if (typeof window !== 'undefined' && window.visualViewport && window.visualViewport.width) {
    return window.visualViewport.width <= bp;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth <= bp;
  }
  return false;
};
