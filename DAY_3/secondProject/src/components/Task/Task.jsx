/*function Task(){
        function hangelClick() {
            const heading = document.getElementById("name");
            heading.innerText = "bingolive";
        }
    return (
        <>
            <h1 id="name">name : bingolive</h1>
            <button onClick={hangelClick} >Chage </button>
        </>
    );
}
export default Task;
*/

function Task({name}){
    function handelClick(){

    }
    return (
        <>
            <h1 > name : {name}</h1>
            <button onClick={handelClick}>Change</button>
        </>
    );
}
export default Task;