
interface IProps {
  parent?: string;
  classes?: string;
}

const MainContainer: React.FunctionComponent<IProps> = ({ parent, classes, children }) => {
  return (
    <div className={`${ parent }__main-container ${ classes }`}>
      { children }
    </div>
  );
};

export default MainContainer;