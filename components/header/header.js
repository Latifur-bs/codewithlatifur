import Button from '../common_components/button/button';
import classes from './Header.module.scss';
import Image from 'next/image';
const { default: Link } = require("next/link")


function Header({onHeaderChangeLanguageBn, onHeaderChangeLanguageEn}) {
    return (
        <header className={classes.topHeader}>
            <div className='container'>
               <div className={classes.headerWrapper}>
                 <Link href="/">
                    <Image
                        src="/logo.jpg"
                        alt="Logo"
                        width={80}
                        height={80}
                        />
                 </Link>

                    <div className={classes.languageNav}>
                        <Button type='button' onClick={onHeaderChangeLanguageEn}>
                        English
                        </Button>
                        <Button type='button' onClick={onHeaderChangeLanguageBn}>
                            Bengali
                        </Button>
                    </div>
                   
               </div>
            </div>
       
        </header>
    )
}

export default Header;