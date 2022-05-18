export {HeadCard};
 function HeadCard(props){
    return(
      <div class="card mb-4">
                  <div class="card-body">
                    {props.content}
                    <a target="blank" href={props.link}>{props.title}</a>
                    .
                  </div>
                </div>
    )
  }