import classes from './Header.module.scss';
import Image from 'next/image';
const { default: Link } = require("next/link")

function Header({onHeaderChangeLanguage}) {
    return (
        <header className={classes.topHeader}>
            <div className='container'>
               <div className={classes.headerWrapper}>
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={80}
                    height={80}
                    />

                    
                    <button type='button' onClick={onHeaderChangeLanguage}>
                    Bengali
                    </button>
               </div>
            </div>
       
        </header>
    )
}

export default Header;