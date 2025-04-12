const rootContainer=document.getElementById("root");
console.log("rootcontainer is :",rootContainer);

// if we want to add a heading using js then we do something like this.
// create a tag -> then add content -> then append it.

function App(){
    return React.createElement("h1",{},"Hellow world");
}

// const root = ReactDom.createRoot(rootContainer); //! the problem is om is in capital case.
const root = ReactDOM.createRoot(rootContainer);

// root.render(App());

// using babel.. type=text/babel.. 
let h1 = <div>love</div>
root.render(h1);
