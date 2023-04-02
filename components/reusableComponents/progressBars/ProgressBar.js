import classes  from './ProgressBar.module.scss';
function ProgressBar ({progressWidth}) {
  const progressBarStyle = {
    width: `${progressWidth * 10}%`
  };
  return <>
    <div className={classes.progressBar}>
      <div  className={classes.progress} style={progressBarStyle}>
        <div className={classes.progressText}>{progressWidth}/10</div>
      </div>
    </div>
  </>
}
export default ProgressBar;