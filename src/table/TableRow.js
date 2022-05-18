function TableRow(props){
    const {data1, data2, data3, data4, data5, data6} = props;
        return(
          <tr>
                <TableData label={data1}/>
                <TableData label={data2}/>
                <TableData label={data3}/>
                <TableData label={data4}/>
                <TableData label={data5}/>
                <TableData label={data6}/>
          </tr>
        )
  }

  function TableData(props){
    const {label} = props;
    return(
      <td>{label}</td>
    )
  }
export {TableData, TableRow};