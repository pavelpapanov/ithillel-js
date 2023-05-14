import React from "react";

export default class MainContent extends React.Component {
  render() {
    return (
        <main className="main">
          <h1>Quick Start</h1>
          <p>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts
            that you will use on a daily basis.</p>
          <h2>You will learn</h2>
          <ul>
            <li>How to create and nest components</li>
            <li>How to add markup and styles</li>
            <li>How to display data</li>
            <li>How to render conditions and lists</li>
            <li>How to respond to events and update the screen</li>
            <li>How to share data between components</li>
          </ul>
          <h3>Creating and nesting components</h3>
          <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own
            logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
          <h3>Writing markup with JSX</h3>
          <p>The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its
            convenience. All of the tools we recommend for local development support JSX out of the box.</p>
        </main>
    )
  }
}