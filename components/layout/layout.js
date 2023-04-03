import Header from "../header/header";



function Layout(props) {
    return(
        <>
            <Header onHeaderChangeLanguage={props.onChangeLanguage}/>
            {props.children}
        </>
    )
}

export default Layout;