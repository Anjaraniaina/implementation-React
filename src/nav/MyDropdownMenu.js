function DropdownItem(props){
    return(
      <li><a className="dropdown-item" href={props.link}>{props.item}</a></li>
    )
  }
  function MyDropdownMenu(props){
    const {children} = props;
    return(
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id={props.dropdownId} href={props.link} role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className={props.iconClass}></i></a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      {children}
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href={props.lastLink}>{props.lastItem}</a></li>
                  </ul>
              </li>
          </ul>
    )
  }
export {MyDropdownMenu, DropdownItem};  