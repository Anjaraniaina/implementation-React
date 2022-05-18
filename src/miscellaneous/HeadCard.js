export default function HeadCard(props){
    return(
      <div class="card mb-4">
                  <div class="card-body">
                    {props.content}
                    <a target="_blank" href={props.link}>{props.title}</a>
                    .
                  </div>
                </div>
    )
  }