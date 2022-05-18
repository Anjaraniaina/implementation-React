export default function MyNav(props){
    const {children} = props;
    return(
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
  
        <a className="navbar-brand ps-3" href="index.html">{props.bigtitle}</a>
  
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
  
        
        {children}
   </nav>
    )
  }