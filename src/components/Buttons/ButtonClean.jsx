import css from './Buttons.module.css';

export const ButtonClean = ({ handleDelete }) => {
  return (
    <button className={css.button} type="button" onClick={handleDelete}>
      Clean
    </button>
  );
};
