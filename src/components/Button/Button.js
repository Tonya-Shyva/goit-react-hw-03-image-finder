// import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ButtonStyled onClick={onClick} type="button">
      Load more
    </ButtonStyled>
  </div>
);
// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
