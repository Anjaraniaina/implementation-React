function MainContent(props){
    const {children, title} = props;
    return(
        <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">{title}</h1>
              {children}
            </div>
          </main>
    )
  }

  export {MainContent};