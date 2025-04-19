// how to handel events ..


// react has capability to change the variables but the component is not re-render on the change of normal variable because of that we can't see changes in ui..

// why react hooks were interduced ..  (refer notes)
// functional component are stateless where as classbased component are stateful so to make the functional compneont stateful react interduced the hooks concept...


// props can be considred as the arguments of a function or attributes of a tag..
// state are variable which are tracked by react and on chnages on the state variable that chnges will be reflected on ui.

//! states are mutable and props are immutable.

//? sam -> states are mutable..

// ❓ Why are props immutable in React?
// Props are immutable by design because React follows a unidirectional data flow — data flows from parent to child.Here's why immutability matters:
/**
 * 🔧 1. Predictability of Components
When props don't change unexpectedly, components behave predictably. You always know:

"This component's output depends on the props it receives."

If props change, it's because the parent decided to change them.

🔄 2. Unidirectional Data Flow
React uses top-down data flow (parent → child). Allowing children to change props would break this model and make debugging/reactivity harder.
🧠 3. Component Reusability and Purity
Props are often used in pure components, which are:

Functions that return the same output for the same input.

Easy to test, debug, and optimize.

Making props immutable helps keep components pure and reusable.

🔄 4. Encourages Better Design
Immutability forces you to think in terms of data ownership:

State (data that can change) lives in the component that owns it.

Props (input data) come from parents.
 */

// Batching..

// ! whenever there is a change in state the components re-renders..