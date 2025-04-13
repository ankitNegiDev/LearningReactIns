{/*function Person(props){
    console.log(props); // data will be seeen here inside hte object since prop is a object.

    return (
        <>
            {/* <h1>name : {name}</h1>
            <h2>age : {age} </h2>
            <h3> favcolor : {favcolor} </h3> 
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age} </h1>
            <h1> favColor : {props.favcolor} </h1>
            <hr/>
        </>
    );
}
// default export..
export default Person;
*/}






// here we are de-structuring the props object that's it.

function Person({name,age,favcolor}){

    return (
        <>
            <h1>name : {name}</h1>
            <h2>age : {age} </h2>
            <h3>favcolor : {favcolor} </h3>
            <hr/>
        </>
    );
}
export {Person};
