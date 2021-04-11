
type Props = {
  styles: any;
  id?: string;
}

const Section: React.FunctionComponent<Props> = ({ id, styles, children }): JSX.Element => {
  return (
    <section id={ id && id } className={`${ styles.wrapper } noselect`}>
      { children }
    </section>
  );
};

export default Section;