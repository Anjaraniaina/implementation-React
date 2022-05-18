export {MyFooter};
 function MyFooter(props){
    return(
      <footer class="py-4 bg-light mt-auto">
              <div class="container-fluid px-4">
                <div class="d-flex align-items-center justify-content-between small">
                  <div class="text-muted">Copyright &copy; {props.author}</div>
                  <div>
                    <a href={props.privacyLink}>Privacy Policy</a>
                    &middot;
                    <a href={props.conditionLink}>Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
      </footer>
    )
}