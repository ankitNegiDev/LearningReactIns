function Objects(){
    let obj={
        name:"bingo",
        age:23,
    }
    let arr=[1,2,3,4];
    return (
        <>
            <div>
                <h1>Hello object and array</h1>
                {/* <h2>Obj : {obj}</h2> */} // object not valid react child
                <h2>object propery accessible obj.name : {obj.name}</h2>
                <h2>object propery accessible obj.age : {obj.age}</h2>
                <h2>Array : {arr}</h2>
                <h3>Array index value : {arr[0]}</h3>
            </div>
            <div>
                <h1>Looping in array </h1>
                {arr.map(function callback(element,index){
                    return (
                        <h1 key={index}>element : {element}</h1>
                    );
                })}
            </div>
        </>
    );
}

export default Objects;