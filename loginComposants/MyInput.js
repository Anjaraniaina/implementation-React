function MyInput(props){
    const { type, label, id} = props;
    return (
        <div className="form-floating mb-3 text-danger">
                <input className="form-control" id={id} type={type} placeholder="name@example.com" />
                <label for="inputEmail">{label}</label>
        </div>
    )
}
export default MyInput;