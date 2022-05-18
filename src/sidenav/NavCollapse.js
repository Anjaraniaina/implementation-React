export {NavCollapse};
 function NavCollapse(props){
    const {children} = props;
    return(
      <><a class="nav-link collapsed" href={props.link} data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
            {props.item}
            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
        </a>
              <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
          <nav class="sb-sidenav-menu-nested nav">
            {children}
          </nav>
        </div></>
  
    )
  }
  
  