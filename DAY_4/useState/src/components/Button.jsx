function Button({ target, onClick }) {
    return (
        <>
            <h1>Target: {target}</h1>
            <button onClick={onClick}>Click Me</button>
        </>
    );
}
export default Button;
