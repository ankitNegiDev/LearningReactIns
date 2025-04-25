// useEffect()
// side effect ...  means that directly does not change the dom..
// api calling(fetch , axios) , setTimout , setInterval.,


// useEffect()..
/**
 * useEffect() take two args ,, callback and dependency array.
 *? when does the useEffect() runs ---> when the component is rendered for the first time.. , second time is when there is something in the dependcy array and that thing changes..
 * 
 */

//  dpendency array.
/**
 * (1) if dependecy array is not pass .. useEffect()callback will execute when the component is loaded for the first time and second is when the component is re-render does not matter who re-render the component.
 * (2) if dependcy array is empty .. the component will render only for the first time on load
 */