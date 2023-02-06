import css from './Buttons.module.css';

export const ButtonAdd = ({ addExample }) => {
  return (
    <button className={css.button} type="button" onClick={addExample}>
      Add text from example
    </button>
  );
};
