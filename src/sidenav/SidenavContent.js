function SidenavContent(props){
    const {children} = props;
    return(
        <div id="layoutSidenav_content">
          {children}
        </div>
    )
}
export {SidenavContent};