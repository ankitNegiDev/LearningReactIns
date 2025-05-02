import { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(
        function callback() {
            let id = setInterval(function callback() {
                if (count < 100) {
                    setCount(function callback(previous) {
                        return previous + 1;
                    });
                } else {
                    clearInterval(id);
                }
            }, 1000);

            // cleanup..
            return function callback() {
                clearInterval(id);
            };
        },
        [count]
    );

    return (
        <>
            <div>count : {count}</div>
        </>
    );
}

export default Timer;

/*

import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  // Named callback function to increment count
  function increment() {
    if (count < 100) {
      setCount(function (prevCount) {
        return prevCount + 1;
      });
    }
  }

  useEffect(function () {
    // Set timeout with a named callback
    if (count < 100) {
      const id = setTimeout(increment, 1000);

      // Cleanup function to clear timeout if count reaches 100 or component unmounts
      return function () {
        clearTimeout(id);
      };
    }
  }, [count]); // Runs when `count` changes

  return (
    <>
      <div>
        count: {count}
      </div>
    </>
  );
}

export default Timer;

*/
