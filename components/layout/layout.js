import Header from "../header/header";



function Layout(props) {
    return(
        <>
            <Header onHeaderChangeLanguageBn={props.onChangeLanguageBn} onHeaderChangeLanguageEn={props.onChangeLanguageEn}/>
            {props.children}
        </>
    )
}

export default Layout;