export default function MySidenavNav(props){
    const {children} = props;
    return(
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              {children}
            </div>
          </div>
          <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>
            {props.user}
          </div>
        </nav>
      </div>
    )
}