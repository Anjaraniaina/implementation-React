export {NavLink};
 function NavLink(props){
    return(
      <a class="nav-link" href={props.link}>{props.title}</a>
    )
  }