import classes  from './Experiences.module.scss';

function Experiences({experiences}) {
    return(
        <div className={classes.experience}>
            <h2 className="section-title">Career Journey</h2>
            <ul className={classes.timeline}>
            {
                experiences.map((experience, index) => {
                    return  <li key={index}>
                                <div className={classes.direction}>
                                    <div className={classes.flagWrapper}>
                                        <span className={classes.flag}>{experience.title}</span>
                                        <span className={classes.timeWrapper}><span className={classes.time}>{experience.startDate} - {experience.endDate}</span></span>
                                    </div>
                                    <div className={classes.desc}>{experience.company}</div>
                                </div>
                            </li>
                })
            }

        </ul>
        </div>
    
    )
}

export default Experiences