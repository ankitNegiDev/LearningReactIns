function Variable(){

    let a=10;
    let b="bingo";
    let c=null;
    let d = true;
    let e = false;
    let f = undefined;
    return (
        <>
            <div>
                <h1>a : {a}</h1>
                <h1>b : {b}</h1>
                <h1>c : {c}</h1>
                <h1>d : {d}</h1>
                <h1>e : {e}</h1>
                <h1>f : {f}</h1>
            </div>

            <hr />
            <hr />
            <div>
                <h1>a : {a}</h1>
                <h1>b : {b}</h1>
                <h1>c : {JSON.stringify(c)}</h1>
                <h1>d : {JSON.stringify(d)}</h1>
                <h1>e : {JSON.stringify(e)}</h1>
                <h1>f : {JSON.stringify(f)}</h1>
            </div>
        </>
    );
}

export default Variable; 