export default function NavCollapseSubItem(props){
    return(
      <a class="nav-link" href={props.subitemLink}>{props.subitem}</a>
    )
  }