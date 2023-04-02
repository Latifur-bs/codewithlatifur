import classes from './TechnicalSkills.module.scss';
import ProgressBar from "../reusableComponents/progressBars/ProgressBar";

function TechnicalSkills({skills}) {
  return (
    <div>
    <div className={classes.skills} >
        <h2 className='section-title'>Technical Skills</h2>
        <div className="container">
            {
                skills.map((skill,index) => {
                    return <div className={classes.skill} key={index}>
                                    <h3 >{skill.name}</h3>
                                    <ProgressBar progressWidth={skill.level} />
                                </div>
                })
            }
            </div>
        </div>
    </div>
  );
};

export default TechnicalSkills;
