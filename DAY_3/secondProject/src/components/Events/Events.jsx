function Event(){
    function handelClick(event){
        console.log("event .target is : ",event.target);
    }
    return (
        <>
            <button
                onClick={function callback(event,myCustomArgs="myCustom args") {
                    console.log("event.target is : ", event.target);
                    console.log("my custom args is : ",myCustomArgs);
                    // console.log("name of button is : ",nameOfButton); // we can't pass prop as argument in the callback function..
                }}
            >
                click me
            </button>
            <hr/>
            <button onClick={handelClick}>add button</button>
        </>
    );
}

export default Event;