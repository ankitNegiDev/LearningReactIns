// memo and useMemo and useCallback all three are different..

// memo
/**
 * memo is just a function and it check our props.
 * memo will check that is our prop is changed or not.
 * if props are changed then component will be re-rendered.
 * But if props are not changed or props are same then component will not be re-rendered.
 * memo helps us to reduce the no of re-render when the props are same of a component .
 */

// useMemo()
/**
 * useMemo() is a hook that re-member the output and does not evaluate it agian.
 * syntax ====> let returnedValue = useMemo(()=>{},[depdency array])
 */

// input
/**
 * whenever we create input then these input are called uncontrolled input..
 * to convert it into the controlled input -> interduced new state, add value,event
 */

// useCallback and useMemo  and memo diff

/**
 ** memo
    * memo is not a hook
    * memo will be used when props are same it won't re-render the component.


 ** useMemo
    * it is a hook
    * it memomizes the value / output  so that un-necessary computation are avoided.


 ** useCallback
    * it is a hook
    * it memomizes the function.
    * 
 */

//  number ,string , boolean all are passed by value 
// array , obj, function are passed by reference.