function Car({price}){

    return (
        <>
            <h1>Car</h1>
            <h2>price : {price}</h2>
        </>
    );
}

// another component.. (but not recomended.)

function Bmw({BmwPrice}){

    return (
        <>
            <h1>Bmw</h1>
            <h2>price : {BmwPrice}</h2>
        </>
    );
}

function RangeRower({RangeRowerPrice}){

    return (
        <>
            <h1>Range Rower</h1>
            <h2>Price : {RangeRowerPrice}</h2>
        </>
    );
}

function Audi({price}){
    return (
        <>
            <h1>Audi</h1>
            <h2>price : {price}</h2>
        </>
    );
}

export {Car,Bmw,RangeRower,Audi};