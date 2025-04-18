import Smarth from "./Samarth";

function Sports({name}){
    return (
        <>
            <h2>Sports compoonet {name}</h2>
            <p>first call</p>
            <hr />

            <Smarth name="--samarth 1" age={23}/>
            <hr />
            <p>second call</p>

            <Smarth name="--samarth 2" age={25}/>
        </>
    );
}
export default Sports;

// ek samarth naam ka component banoo jo ki 1-2 prop leta ho like name , age etc. then ek or component banoo Sports ke naam se jo ki smarth component ko call kare.