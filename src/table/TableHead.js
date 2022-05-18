function TableColumn(props){
    const {label} = props;
    return(
      <th>{label}</th>
    )
  }
  function TableHead(props){
    const {data1, data2, data3, data4, data5, data6} = props;
        return(
          <thead>
            <tr>
                  <TableColumn label={data1}/>
                  <TableColumn label={data2}/>
                  <TableColumn label={data3}/>
                  <TableColumn label={data4}/>
                  <TableColumn label={data5}/>
                  <TableColumn label={data6}/>
            </tr>
          </thead>
        )
  }
export {TableColumn, TableHead};