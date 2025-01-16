import './Button.css';

const Button = (props) => {
  const { label, click } = props;
  return (
    <input className='btn' type='button' onClick={click} value={label} />
  );
}

export default Button;