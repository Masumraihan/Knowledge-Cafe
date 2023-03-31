import React from "react";

const QuestionAns = () => {
  return (
    <div className='p-5 flex flex-col gap-4'>
      <div>
        <h1 className='text-xl font-bold'>1. Props vs state</h1>
        <p>
          Answer: props are immutable it's can't changed but state are mutable
          it's change asynchronously. props use to pass data component to other
          component. state use to hold data about the component.
        </p>
      </div>
      <div>
        <h1 className='text-xl font-bold'>2. How does useState work?</h1>
        <p>
          useState react hook is build in method. useState hook need first
          initial value as parameter and return a array. array first element
          value set the initial value and second element is a function, this
          function is change first element value and if call this function it
          set a new value of first array element then called react render
          function.
        </p>
      </div>
      <div>
        <h1 className='text-xl font-bold'>
          2. Purpose of useEffect other than fetching data.
        </h1>
        <p> a. validating input field.</p>
        <p> b. live filtering.</p>
        <p>
          {" "}
          c. trigger animation on new array value.
        </p>
        <p>d. update paragraph list on fetched API data update.</p>
        <p>e. updating fetched API data to get BTC updated price</p>
      </div>
      <div>
        <h1 className='text-xl font-bold'>How Does React work?</h1>
        <p>
          React is component based javascript library. react have a virtual dom
          in inside of react. if state changed then react use diff algorithm to
          re-render the code and inside of virtual DOM fixed the changes and
          send the output final result in DOM.
        </p>
      </div>
    </div>
  );
};

export default QuestionAns;
