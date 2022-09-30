import React from "react";
import "./QnA.css";

const QnA = () => {
  return (
    <div className="QnA-container">
      <div className="oneThird">
        <h1>How does react works?</h1>
        <br />
        <p>
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes. The declarative view makes your code more predictable
          and easier to debug. A React application is made of multiple
          components, each responsible for rendering a small, reusable piece of
          HTML.
        </p>
      </div>

      <div className="oneThird">
        <h1>PROPS vs STATE</h1>
        <table>
          <tr>
            <th>PROPS</th>
            <th>STATE</th>
          </tr>
          <tr>
            <td>The Data is passed from one component to another.</td>
            <td>The Data is passed within the component only.</td>
          </tr>
          <tr>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
          </tr>
          <tr>
            <td>Props can be used with state and functional components.</td>
            <td>
              State can be used only with the state components/class component
              (Before 16.0).
            </td>
          </tr>
          <tr>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
          </tr>
        </table>
      </div>

      <div className="oneThird">
        <h1>Uses of useEffect</h1>
        <p>
          The useEffect Hook allows you to perform side effects in components.
          <br /> <br />
          <strong>Uses of useEffect except fetching data:</strong> <br />
          We can also apply useEffect for directly updating the DOM, and timers.
          <br /> <br />
          useEffect accepts two arguments. The second argument is optional.
          <br />
          <br />
          <br />
          <h3>Basic structure of useEffect</h3>
          <p>useEffect(function, [dependency])</p>
        </p>
      </div>
    </div>
  );
};

export default QnA;
