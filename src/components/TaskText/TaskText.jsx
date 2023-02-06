import logo from '../../images/PortaOne.png';
import css from './TaskText.module.css';

export const exampleText =
  'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.         -- Geoffrey James, "The Tao of Programming"';

export const TaskText = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.taskHeader}>
        Test task for{' '}
        <img src={logo} alt="Logo PortaOne" background-color="blac" />
      </h2>
      <p>
        Вам потрібно розробити алгоритм програми, яка повинна виконувати
        наступне:
        <br /> - програма приймає на вхід довільний текст і знаходить в кожному
        слові цього тексту найперший символ, який більше НЕ повторюється в
        аналізуємому слові
        <br />- далі із отриманого набору символів програма повинна вибрати
        перший унікальний (тобто той, який більше не зустручається в наборі) і
        повернути його.
      </p>
      <p>Наприклад, якщо програма отримує на вхід текст нижче:</p>
      <p className={css.exampleText}>{exampleText}</p>
      <p>то повинна повернути вона символ "m".</p>
    </div>
  );
};
