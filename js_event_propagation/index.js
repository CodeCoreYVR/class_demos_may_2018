// JS: Event Propagation

// Demo
const scriptStart = new Date().getTime();
const eventLogger = event => {
  const { currentTarget, eventPhase } = event;
  const { tagName, id, className } = currentTarget;

  // The event object has a property, eventPhase,
  // which holds an integer that corresponds the
  // the current phase of the event as follows:
  const phases = {
    1: "Capturing",
    2: "At Target",
    3: "Bubbling",
    0: "None"
  };

  if (
    currentTarget.matches && // Does the matches method exist?
    currentTarget.matches(".team.salmon") &&
    eventPhase === 2
  ) {
    // Use the event.stopPropagation() method to prevent an
    // from propagating to the next listener that should
    // trigger the method call.
    event.stopPropagation();
  }

  const groupName = `Event Logger @ ${new Date().getTime() - scriptStart}ms`;

  console.group(groupName);
  if (currentTarget instanceof HTMLDocument) {
    console.log("document");
  } else {
    console.log(`${tagName}#${id}.${className.replace(/ /g, ".")}`);
  }
  console.log("Event Phase:", phases[eventPhase]);
  console.groupEnd(groupName);

  // To test if an event can bubble, because not all events
  // bubble, do the following:
  event.bubbles; // returns `true` if it bubbles; `false` otherwise.

  if (event.bubbles) {
    console.log("I bubble! 😎");
  }
};

document.querySelectorAll("*").forEach(node => {
  // <node>.addEventListener(...) can take an
  // optional third argument that is an options object.
  // This object can take a property "capture" set to `true`
  // to force the listener to only trigger on the capturing
  // phase instead of the bubbling phase.
  // Other options include "once" which forces the listener
  // to only trigger once.
  node.addEventListener("click", eventLogger, { capture: true });
  node.addEventListener("click", eventLogger);
});

document.addEventListener("click", eventLogger, { capture: true });
document.addEventListener("click", eventLogger);
