
type Props = {
  submit: (e: React.FormEvent) => void;
  styles?: any;
}


const Form: React.FunctionComponent<Props> = ({ submit, styles, children }): JSX.Element => {
  return (
    <form onSubmit={ submit } className={ styles ? styles.form : ''}>
      { children }
    </form>
  );
};

export default Form;