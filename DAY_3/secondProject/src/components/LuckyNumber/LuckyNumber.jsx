function LuckyNumber({ userLuckyNumber }) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("User chose:", userLuckyNumber);
    console.log("Random number:", randomNum);

    return (
        <>
            {/* <h1>Result: {check(userLuckyNumber, randomNum)}</h1> */}
            <div>
                {randomNum===userLuckyNumber ? <h1>Lucky</h1>:<h1>better luck</h1>}
                {/* we can get a error is since react render componnet twics.. */}
            </div>
        </>
    );
}

/*
function check(userLuckyNumber, randomNum) {
    if(userLuckyNumber===randomNum){
        return "luck";
    }else{
        return "better luck";
    }
}
*/

export default LuckyNumber;
