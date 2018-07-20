// Write chatr code here!

// Resource: Messages
// URL Endpoints for Messages as a JSON Api
// Messages#index -> GET /messages
// Messages#create -> POST /messages
// Messages#update -> PATCH /messages/:id
// Messages#destroy -> DELETE /messages/:id

// Columns for Messages
// - content:text
// - flagged:boolean
// - id:int
// - username:string
// - created_at:datetime
// - updated_at:datetime

// Using Fetch

// `fetch` is a function that is part of any modern browser.
// It's asynchronous like setTimeout. Use it to make HTTP requests and
// receive responses seperately from the normal browser flow.

// By default, `fetch` will make a GET request to the URL given
// as the first argument. It can optionally take a configuration
// object as a second argument to specify a different verb, add some
// HTTP headers, write a body, etc.

// Example usage:
/*
fetch("http://localhost:3434/messages")
  .then(response => response.json()) // <- Use `.json()` on the response
  // object to parse a JSON formatted body into a JavaScript data structure.
  .then(data => console.table(data))
  // The parsed data will be received in the chained `.then` call.
*/

/*
fetch("/messages", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
    },
	body: JSON.stringify({
		content: "My new message"
	})
})
*/

// HTTP Request Functions

const Message = {
  all() {
    return fetch(`/messages`).then(res => res.json());
  },
  // Usage:
  // Message.all().then(data => console.table(data))
  create(params) {
    return fetch(`/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    // Usage:
    // Message
    //  .create({content: "Yo!", username: "Jay"})
    //  .then(() => console.log("Message created!"))
  },
  delete(id) {
    return fetch(`/messages/${id}`, { method: "DELETE" });
  }
};

// querySelector shortcut functions

const qS = (selector, node = document) => node.querySelector(selector);

// usage:
// qS("#my-node")
// qS("li", someUlNode)

const qSA = (selector, node = document) => node.querySelectorAll(selector);

// DOM Manipulation

const messageLi = message => {
  const node = document.createElement("li");
  node.innerHTML = `
    <p>
      <span>${message.id} • </span>${message.content}<br/>
      <button data-id="${message.id}" class="btn-delete">Delete</button>
    </p>
  `;

  return node;
};

const refreshMessages = () => {
  Message.all().then(messages => {
    // `messages.map(...)` below will return an array of DOM Nodes.
    // `messagesUl.append(...)` can take multiple Nodes (as multiple
    // arguments) and append them to `messagesUl` node.
    // To take the nodes from the array and pass them as seperate
    // arguments to append, we use the spread operator `...`.
    const node = qS("#messages");
    node.innerHTML = "";
    node.append(...messages.map(message => messageLi(message)));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const messagesUl = document.querySelector("#messages");
  const newMessageForm = document.querySelector("#new-message");

  // Initialize Messages
  refreshMessages();

  // Periodically refresh messages on page
  setInterval(refreshMessages, 500);

  // Create a new message on form submission
  newMessageForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(newMessageForm);

    Message.create({ content: formData.get("content") }).then(() => {
      newMessageForm.reset();
      console.log("Message created!");
    });
  });

  // Delete message when delete btn is clicked
  messagesUl.addEventListener("click", event => {
    const { target } = event;
    // When using an event listener to on an ancestor node
    // to react to events on descendent nodes because
    // these nodes might be added or removed the page, we
    // call this "Event Delegation".

    // The following will only run the console.log(...)
    // if target is inside a node with the class "btn-delete".
    if (target.closest(".btn-delete")) {
      // const messageId = target.getAttribute("data-id");
      // For HTML attributes beginning with "data-", you can
      // get and set them with the ".dataset" property.
      const messageId = target.dataset.id;

      Message.delete(messageId).then(() => refreshMessages());
    }
  });
});

// Chat-Battle Solutions

function createMessage(text) {
  return fetch("/messages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: text
    })
  });
}

fetch(`/messages`)
  .then(res => res.json())
  .then(ms => console.log(ms.length));

function replaceMessage(id, text) {
  return fetch(`/messages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: text
    })
  });
}

function deleteMessage(id) {
  return fetch(`/messages/${id}`, {
    method: "DELETE"
  });
}

function copyMessage(id) {
  return fetch(`/messages`)
    .then(res => res.json())
    .then(messages => {
      const message = messages.find(m => m.id === id);
      return createMessage(message.body);
    });
}
