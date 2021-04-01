
type Props = {
  src: string; 
};

const Video: React.FunctionComponent<Props> = ({ src }): JSX.Element => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        height: '100%',
        width: '100%',
        maxWidth: '216rem',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
        overflow: "hidden"
      }}
    >
      <source src={ src } />
      Your browser is not supported!
    </video>
  )
};

export default Video;