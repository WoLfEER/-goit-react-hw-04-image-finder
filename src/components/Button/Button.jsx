import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

export const Button = ({ onClick, status }) => (
  <BtnLoadMore disabled={status === 'pending'} onClick={onClick}>
    Load more
  </BtnLoadMore>
);

Button.propTypes = {
  status: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};