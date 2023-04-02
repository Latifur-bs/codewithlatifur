import classes  from './Intro.module.scss';


function IntroBanner ({introInfo}) {
    return(
        <>
            <div className={classes.introBanner}>
                <div className='container'>
                    <div className={classes.introwrapp}>
                        <div className={classes.profileImage}>
                            <img src={introInfo.pictureUrl} alt='Md Latifur Rahman'/>
                        </div>
                        <div className={classes.introText}>
                            <h1>{introInfo.name}</h1>
                            <h2>{introInfo.title}</h2>
                            <hr/>
                            <p>{introInfo.summary}</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default IntroBanner;