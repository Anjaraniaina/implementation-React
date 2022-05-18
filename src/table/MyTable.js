export {MyTable};
 function MyTable(props){
    const {children, title} = props;
    return(
      <div class="card mb-4">
              <div class="card-header">
                <i class="fas fa-table me-1"></i>
                {title}
              </div>
              <div class="card-body">
                <table id="datatablesSimple">
                  {children}
                </table>
              </div>
      </div>
    )
}