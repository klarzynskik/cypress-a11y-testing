import React, { useState } from "react";
import { ReactComponent as Icon } from "./icon.svg";
import Checkbox from "./Checkbox";
import Button from "./Button";
import TextInput from "./TextInput";

function App() {
  const [isSubmitted, setSubmitted] = useState(false);

  function DummyForm() {
    return (
      <React.Fragment>
        <h1>Dummy form</h1>
        <form onSubmit={() => setSubmitted(true)} className="form">
          <TextInput label="Name:" id="name" />
          <TextInput label="Last Name:" id="last-name"/>
          <Checkbox
            label="Interests:"
            availableOptions={["books", "movies", "other"]}
          />
          <div className="controls">
            <Button type="reset" aria-label="clear the form">
              <Icon />
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </React.Fragment>
    );
  }

  function SuccessScreen() {
    return (
      <React.Fragment>
        <p>Thanks for submitting the form!</p>
        <div className="controls">
          <Button type="resubmit" onClick={() => setSubmitted(false)}>
            Try again
          </Button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="wrapper" role="main">
      {isSubmitted ? <SuccessScreen /> : <DummyForm />}
    </div>
  );
}

export default App;
