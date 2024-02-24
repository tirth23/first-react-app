function Comp1(props){
    //props.msg="Hai!!"//error-Props immutable
    return(
        <h2>{props.msg}-{props.country}</h2>
    )
}

// function Comp1({msg,country}){
//     //msg="Hai!!"
//     return(
//         <h2>{msg}-{country}</h2>
//     )
// }

export default Comp1