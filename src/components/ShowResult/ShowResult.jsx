import css from './ShowResult.module.css';

export const ShowResult = ({ unique }) => {
  return (
    <p className={css.uniqueSymbolText}>
      First unique symbol:{' '}
      <span className={css.uniqueSymbolSpan}>{unique || 'No such symbol'}</span>
    </p>
  );
};
