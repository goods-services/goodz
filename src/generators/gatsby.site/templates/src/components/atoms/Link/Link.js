import React from 'react';
import { navigate } from 'gatsby';
import { Link } from './Link.style';
/**
 * Component
 * @param {object} props Incoming props
 * @returns {XML} Component
 */
const LinkComponent = ({to, text}) => {
  const linkOut = (e, to) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(to);
    }, 400);
  };
  return (
    <a href={to} onClick={e => linkOut(e, to)}>
      {text}
    </a>
  );
};

export { Link as LinkVanlla };
export default LinkComponent;
