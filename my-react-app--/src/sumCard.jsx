function SumCard(props){
    function calculateSum(){
        props.setRes(props.a+props.b)
    }
return (<>
<p>a={props.a}</p>
<p> b={props.b}</p>
<button on onClick={calculateSum}>calculate</button>

</>);
}
export default SumCard;
