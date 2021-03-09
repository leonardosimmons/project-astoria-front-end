import key from '../redux-store/keys';

const ConstructionPage = () => {
  return (
    <div className={`${ key.UNDER_CONSTRUCTION }`}>
      <div className={`${ key.UNDER_CONSTRUCTION }__container`}>
        <p className={`${ key.UNDER_CONSTRUCTION }__text`}>Test</p>
        <p>Test</p>
        <p>Test</p>
      </div>
    </div>
  )
};

export default ConstructionPage;