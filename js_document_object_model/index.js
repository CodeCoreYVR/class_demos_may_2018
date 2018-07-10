// JS: Document Object Model

// In the browser, the `document` is the root object of the DOM.
// Its descendent nodes represent all tags that loaded with
// the html document. By default, Chrome will display nodes
// as collapsible HTML, but you can use `console.dir()`
// to force Chrome to display as their actual object
// representation.
// Example: `console.dir(document)`

// SELECTING NODES

// In the following, <node> can be replaced with any node object
// such as the `document` or any selected with `querySelector`
// and friends. (i.e. any object that is an `instanceof Node`)

// <node>.querySelector(<css-query>)
// Finds the first node that matches the <css-query>. Replace
// <css-query> with any valid CSS selectory we've learned before.

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <node>.querySelectorAll(<css-query>)
// Finds ALL nodes that match the <css-query>. It returns
// them in a NodeList instance that is similar to array.
// NodeList can be iterated with `for .. of` loops and
// the .forEach() method.

const allDoggos = document.querySelectorAll(".doggo");
const allTeams = document.querySelectorAll(".team");

// Iteration example:

// for (let node of allDoggos) {
//   console.log(node.id);
// }

// Exercise: Picking Doggos

// 1.
document.querySelectorAll("#moneybags-michael, #larry-the-lion");

// 2.
document.querySelectorAll(".team.teal .doggo.fighter:not(:first-child)");

// 3.
document.querySelectorAll(".team .doggo:nth-child(2)");

// NAVIGATING THE DOM

// <node>.parentElement
// This property returns the parent node of <node>.
teamSalmon === toxicTim.parentElement.parentElement; // true

// <node>.children
// This property returns children node of <node>.
teamSalmon.children;
teamSalmon.children[1].children;

// <node>.matches(<css-query>)
// Returns `true` if <node> matches the <css-query>; `false`
// if it doesn't.

toxicTim.matches(".doggo"); // true
toxicTim.matches(".doggo.worker"); // false
toxicTim.matches("p"); // false
toxicTim.matches("div"); // true

// <node>.closest(<css-query>)
// Searchs all ancestors (including <node> itself) of <node>
// for the first ancestor that matches <css-query>. It returns
// `null` if no ancestor matches <css-query>.

toxicTim.closest(".team"); // <div class=​"team salmon">​…​</div>​
toxicTim.closest("input"); // null
toxicTim.closest("body"); // <body>​…​</body>​
toxicTim.closest(".team.teal"); // null

// MANIPULATION

// Styling with Inline Styles

const application = document.querySelector("div.application");

// Nodes have a `style` property that holds an object which
// contains all inline styles (i.e. the HTML attribute "style")
// of a Node. This object can be mutated to directly change an
// inline style live.

// Example usage:
application.style.border = "solid medium lightgrey";
application.style.padding = "5px";
application.style.borderRadius = "5px";
application.style.boxSizing = "border-box";
application.style["background-color"] = "whitesmoke";

// Disclaimer: It's best practice to only use inline styles
// to affect the styling of a node when the changes occur very often.
// For example, changing the position a node using CSS when implementing
// drag and drop with JavaScript.

// Sometimes its necessary to read the actual applied CSS properties
// on a Node. To do this, use the global function `getComputedStyle`.

getComputedStyle(toxicTim);
getComputedStyle(toxicTim).backgroundColor;
getComputedStyle(toxicTim).fontFamily;

// CHANGING AND READING CONTENTS OF A NODE

// <node>.innerHTML
// This property contains all the HTML as a string that is inside
// of <node> with whitespace preserved.
toxicTim.innerHTML;
// "
//             <h1>Toxic Tim</h1>
//           "

// <node>.innerHTML=<html-string>
// Assign to `.innerHTML` to replace the contents with other HTML.
toxicTim.innerHTML = "<h1>Toxic Tim 🐶</h1>";

// <node>.outerHTML
// Like `innerHTML`, but includes <node> itself.
toxicTim.outerHTML;
// "<div id="toxic-tim" class="doggo fighter">
//             <h1>Toxic Tim</h1>
//           </div>"

// <node>.outerHTML=<html-string>
// Like `innerHTML`, but will replace <node> and its contents.
// document.querySelector("body").outerHTML = ""; // Erases everything!

// READING AND WRITING TO HTML5 ATTRIBUTES

// All common HTML attributes that are part of the spec are
// accessible as properties on Nodes. You read them or assign them
// to change their values.

// Examples.
toxicTim.id; //  "toxic-tim"
toxicTim.class; // undefined
toxicTim.className; // "doggo fighter"
toxicTim.href; // undefined
document.querySelector("input").name; // "name"

// For custom attributes that are not part of HTML5, we must
// alternate methods.

// <node>.getAttribute(<attribute-name>)
// Returns the value of HTML attribute with name <attribute-name>
// from a Node even if its a custom attribute. May be inconsistent
// with the `value` attribute of `input` fields.

toxicTim.getAttribute("id");
toxicTim.getAttribute("class");
document.querySelector("form").getAttribute("action");

// <node>.setAttribute(<attribute-name>, <value>)
// Sets the attribute on a Node using the new <value>.

toxicTim.setAttribute("data-confirm", "Are you sure?");
toxicTim.getAttribute("data-confirm"); // "Are you sure?"

// MANIPULATING CLASSES

// <node>.classList is property returns DOMTokenList with methods
// to add, remove or toggle classes that are part of <node>.
// You should nearly always use this to change classes instead
// of <node>.className.

// <node>.classList.add(<class-name>, <class-name>, ...)
// To add classes to <node>, use the .add with any number of class names.
toxicTim.classList.add("labourer");

// <node>.classList.remove(<class-name>, <class-name>, ...)
// To remove any number of classes from <node>, use the remove
// method with multiple <class-name> arguments.
// toxicTim.classList.remove("fighter");
toxicTim.classList.add("injured");

// <node>.classList.toggle(<class-name>)
// To toggle a <class-name> from <node>, use toggle with a single
// <class-name> argument. It will return `false` when the class is
// removed. It will return `true` when the class is added.

// "labourer" is present therefore, its removed
toxicTim.classList.toggle("labourer"); // false
// "labourer" is present therefore, its added
toxicTim.classList.toggle("labourer"); // true
toxicTim.classList.toggle("labourer"); // false

// REMOVING NODES

// <node>.remove()
// Removes <node> from the DOM.

// toxicTim.remove()

// Exercise: Vandalise The Arena

// 1.

// for (let node of document.querySelectorAll(".team")) {
//   node.style.backgroundColor = "fuchsia";
// }

// 2.

// document.querySelectorAll(".doggo.fighter").forEach(node => {
//   node.innerHTML = "<h1>Rob The Slob</h1>";
// });

// 3.

// const CAT_URL =
//   "https://amp.businessinsider.com/images/54cbd460ecad04e048fdfe42-750-562.jpg";

// for (let node of document.querySelectorAll(".doggo.fighter")) {
//   node.style.backgroundImage = `url(${CAT_URL})`;
// }

// CREATING NODES

// document.createElement(<tag-name>)
// Creates an empty HTML Node with tag name of <tag-name>. This
// is detached from the DOM. To attach it to DOM (displaying it),
// we'll have to huge some other methods later.

const drillBitDarel = document.createElement("div");
drillBitDarel.setAttribute("id", "drill-bit-darel");
drillBitDarel.classList.add("doggo", "fighter");
drillBitDarel.style.backgroundImage = `url(images/drill_bit_darel.jpg)`;

// <parent-node>.append(<child-node>, <child-node>, ...)
// Use this method to add any number of <child-node> as
// last children nodes of <parent-node>.

const drillBitDarelName = document.createElement("h1");
drillBitDarelName.innerText = "Drill Bit Darel";

drillBitDarel.append(drillBitDarelName);

// <parent-node>.prepend(<child-node>, <child-node>, ...)
// Use this method add any number of <child-node> as the first
// children of <parent-node>.

const teamTeal = document.querySelector(".team.teal");
teamTeal.querySelector(".roster").prepend(drillBitDarel);

// Using a method like `<parent-node>.prepend(...)` or
// `<parent-node>.append(...)` for a Node already the document,
// will move that Node instead of copying to the new location.

// Moves `drillBitDarel` from `teamTeal` to `teamSalmon`.
teamSalmon.querySelector(".roster").append(drillBitDarel);

// <node>.cloneNode()
// Returns a duplicate copy of <node>. By default, it only duplicates
// <node> itself without its descendents meaning that duplicating
// `drillBitDarel` will not include the <h1> inside.

teamTeal.querySelector(".roster").prepend(drillBitDarel.cloneNode());

// To include the ancestor Nodes, call <node>.cloneNode() with
// the `true` argument.

teamTeal.querySelector(".roster").prepend(drillBitDarel.cloneNode(true));
