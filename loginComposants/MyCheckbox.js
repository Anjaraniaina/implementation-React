function MyCheckbox(props){
    return (
        <div className="form-check mb-3">
                        <input className="form-check-input" id={props.box} type={props.checkbox} value="" />
                        <label className="form-check-label" for="inputRememberPassword">{props.label}</label>
        </div>
    )

}
export default MyCheckbox;