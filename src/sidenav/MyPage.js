export {MyPage};
 function MyPage(props){
    return(
      <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    {props.pageName}
      </a>
    )
  }