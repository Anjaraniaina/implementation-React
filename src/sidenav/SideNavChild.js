export default function SideNavChild(props){
    const {children} = props;
    return(
      <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
        <nav class="sb-sidenav-menu-nested nav">
          {children}
        </nav>
      </div>
    )
  }