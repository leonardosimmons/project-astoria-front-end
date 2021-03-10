
interface IProps {
  parent?: string;
  classes?: string;
}

const ContentBox: React.FunctionComponent<IProps> = ({ parent, classes, children}): JSX.Element => {
  return (
    <div className={`${ parent }__content-box ${ classes }`}>
      { children }
    </div>
  );
};

export default ContentBox;