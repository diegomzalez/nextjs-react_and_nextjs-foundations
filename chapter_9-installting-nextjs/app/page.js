import { useState } from "react";
function H1({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}
export default function HomePage() {
  const names = ["Adam Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = React.useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <section>
      {/* Nesting the H1 component */}
      <H1 title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>
      <button onClick="{handleClick}">Like({likes})</button>
    </section>
  );
}
