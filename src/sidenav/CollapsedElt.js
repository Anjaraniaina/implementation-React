export default function CollapsedElt(props){
  const {children} = props;
    return(
      <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
      <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
        {children}
        </nav>
    </div>
    )
}