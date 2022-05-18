function BreadscrumbContent(props){
    return(
      <li class="breadcrumb-item active">{props.page}</li>
    )
}
function MyBreadscrumb(props){
  return(
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item"><a href="index.html">{props.first}</a></li>
        <BreadscrumbContent page={props.item1}/>
    </ol>
  )
}
export {MyBreadscrumb, BreadscrumbContent};