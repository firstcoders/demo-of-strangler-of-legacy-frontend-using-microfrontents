import React from "react";

class SubNav extends React.Component {
  emitEvent(e) {
    const event = new CustomEvent("CUSTOM_EVENT", {
      bubbles: true,
      detail: { some: "data structure" },
    });

    e.target.dispatchEvent(event);
  }

  emitEventUsingDocument(e) {
    const event = new CustomEvent("CUSTOM_EVENT", {
      bubbles: true,
      detail: { some: "data structure" },
    });

    document.dispatchEvent(event);
  }

  render() {
    return (
      <div>
        <h1>Subnav</h1>
        <button type="button" onClick={this.emitEvent}>
          Emit a custom event that then bubbles to the shell app
        </button>
        <button type="button" onClick={this.emitEventUsingDocument}>
          Emit a custom event using the document as dispatcher
        </button>
      </div>
    );
  }
}

export default SubNav;
