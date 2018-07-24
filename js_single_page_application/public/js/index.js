// JS: Single Page Application

// DOM Helpers

const qS = (selector, node = document) => node.querySelector(selector);

const qSA = (selector, node = document) => node.querySelectorAll(selector);

// Requests
const HOST = "localhost:3000";
const API_BASE = "/api/v1";
const BASE_URL = `http://${HOST}${API_BASE}`;

const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, { credentials: "include" }).then(
      res => res.json()
    );
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/questions/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

// View Functions

const viewQuestions = (questions = []) => {
  return questions
    .map(
      question =>
        `<li>
          <a class="question-link" href="#" data-id="${question.id}">
            ${question.title}
          </a>
        </li>`
    )
    .join("");
};

const viewQuestionDetails = question => {
  return `
    <div>
      <h1>${question.title}</h1>
      <p>${question.body}</p>
      <p>
        <small>Seen ${question.view_count} time(s)</small> •
        <small>Liked ${question.like_count} time(s)</small> •
        <small>Created at ${question.created_at}</small> •
        <small>Updated at ${question.updated_at}</small>
      </p>
    </div>
  `;
};

// View Rendering
const navigateTo = domId => {
  qSA(".page").forEach(node => {
    if (domId === node.id) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });
};

// Temporarily hard-coding a login
// This is a measure to measure to get around user login.
// We should actually create a Sign In page and login
// that way instead.
Session.create({ email: "js@winterfell.gov", password: "supersecret" });

const refreshQuestionIndex = () => {
  Question.all().then(questions => {
    qS(".question-list").innerHTML = viewQuestions(questions);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // Load questions for index
  refreshQuestionIndex();

  // Link .question-link to question show
  // We use event delegation, because the question-links
  // are not initially loaded and may be replaced.
  qS(".question-list").addEventListener("click", event => {
    const { target } = event;

    if (target.closest(".question-link")) {
      event.preventDefault();
      const id = target.dataset.id;

      Question.one(id).then(question => {
        qS("#question-show").innerHTML = viewQuestionDetails(question);
        navigateTo("question-show");
      });
    }
  });

  // Make Navbar navigable
  qSA("a[data-target]").forEach(node => {
    node.addEventListener("click", event => {
      event.preventDefault();

      const { target } = event;
      const domId = target.dataset.target;
      navigateTo(domId);
    });
  });

  qS("#question-new-form").addEventListener("submit", event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    Question.create({
      title: formData.get("title"),
      body: formData.get("body")
    })
      .then(data => {
        const id = data.id;
        currentTarget.reset();

        return Question.one(id);
      })
      .then(question => {
        qS("#question-show").innerHTML = viewQuestionDetails(question);
        navigateTo("question-show");
        refreshQuestionIndex();
      });
  });
});
