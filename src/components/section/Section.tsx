
type Props = {
  styles: any;
}

const Section: React.FunctionComponent<Props> = ({ styles, children }): JSX.Element => {
  return (
    <section className={`${ styles.wrapper } noselect`}>
      { children }
    </section>
  );
};

export default Section;