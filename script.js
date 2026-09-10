const projectData = {
  onboarding: {
    type: "ILT / VILT • Onboarding",
    title: "New-Hire Onboarding Experience",
    body: `
      <h4>The challenge</h4>
      <p>New teammates needed to complete technical setup, confirm access to multiple systems, understand key workplace expectations, and prepare for role-specific training in a structured virtual environment.</p>
      <h4>My approach</h4>
      <p>I organized the experience into a guided onboarding flow that combines facilitator instruction with hands-on setup, system checks, practice activities, performance resources, and follow-up tasks.</p>
      <h4>Selected design decisions</h4>
      <ul>
        <li>Used a setup checklist to make technical readiness visible and actionable.</li>
        <li>Sequenced tool orientation before deeper role-specific learning.</li>
        <li>Included knowledge checks and observation prompts to reinforce retention.</li>
        <li>Built facilitator guidance directly into the delivery materials to support consistency.</li>
      </ul>
      <h4>Deliverables</h4>
      <p>Virtual instructor-led presentation, facilitator guidance, learner activities, setup resources, knowledge check, observation assignment, and training survey.</p>
      <p><em>Portfolio note: This case study is intentionally sanitized to protect confidential employer information.</em></p>
    `
  },
  jobaid: {
    type: "Performance Support • Job Aid",
    title: "Workflow Performance Support",
    body: `
      <h4>The challenge</h4>
      <p>Employees often need quick support while performing a task, not another full course.</p>
      <h4>My approach</h4>
      <p>I use step-based visual hierarchy, concise language, screenshots or callouts when appropriate, and clear decision points so the learner can get in, complete the task, and get back to work.</p>
      <h4>Design principles</h4>
      <ul>
        <li>One task per guide.</li>
        <li>Action-oriented headings and short steps.</li>
        <li>Visual emphasis only where it reduces cognitive load.</li>
        <li>Content structured for use at the moment of need.</li>
      </ul>
      <p><em>This portfolio sample can be replaced with one of your polished Fiverr/job-aid examples when ready.</em></p>
    `
  },
  micro: {
    type: "Microlearning • Portfolio Concept",
    title: "5-Minute Decision Practice",
    body: `
      <h4>Concept</h4>
      <p>A short scenario-based learning experience focused on a single workplace skill. Learners make realistic decisions, receive immediate feedback, and try again without sitting through unnecessary content.</p>
      <h4>Why this format</h4>
      <p>Microlearning works best when the performance need is narrow. This concept demonstrates how I would teach one behavior through practice rather than presenting a long information-heavy course.</p>
      <h4>Possible build</h4>
      <p>3 short scenarios, immediate feedback, one takeaway screen, and a downloadable performance reminder.</p>
    `
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalBody = document.getElementById("modal-body");

document.querySelectorAll(".modal-open").forEach(btn => {
  btn.addEventListener("click", () => {
    const data = projectData[btn.dataset.modal];
    modalType.textContent = data.type;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

document.querySelectorAll(".modal-close").forEach(el => {
  el.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
