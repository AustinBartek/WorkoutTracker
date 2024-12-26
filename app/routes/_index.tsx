import type { MetaFunction } from "@remix-run/node";

import type { LinksFunction } from "@remix-run/node";

import styles from "app/styles/_index.css?url";
import { Form } from "@remix-run/react";
import { useRef } from "react";
import React from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <center>
        <div className={"greeting"} role="greeting">Hi!</div>
        <div role="button div">
          <TestButton />
        </div>
      </center>
    </div>
  );
}

export function TestButton() {
  const [key, setKey] = React.useState(0);

  let buttonColIndex = useRef(0);
  const buttonColors = ["red", "orange", "yellow", "green", "blue", "purple"];

  function updateButtonColor() {
    buttonColIndex.current++;
    if (buttonColIndex.current >= buttonColors.length) {
      buttonColIndex.current = 0;
    }
    setKey(key + 1);
  }

  let conditional;
  if (buttonColIndex.current < 5) {
    conditional = <ColoredButton
      color={buttonColors[buttonColIndex.current]}
      text={buttonColIndex.current + ""}
      clickEvent={updateButtonColor}
    />
  } else {
    conditional = <div></div>
  }

  return (
    <div key={key}>
      {conditional}
    </div>
  )
}

export function ColoredButton({ color, text, clickEvent }: { color: string, text: string, clickEvent: Function }) {
  return (
    <button style={{ backgroundColor: color }} className={"button"} onClick={() => { clickEvent() }}>{text}</button>
  )
}