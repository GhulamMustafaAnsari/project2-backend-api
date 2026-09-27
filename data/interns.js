// In-memory data store (Project 2 has no database yet — that's Project 3)
let interns = [
  { id: 1, name: "Ayesha Khan", role: "Frontend Intern", email: "ayesha@decodelabs.tech" },
  { id: 2, name: "Bilal Ahmed", role: "Backend Intern", email: "bilal@decodelabs.tech" },
  { id: 3, name: "Sara Malik", role: "UI/UX Intern", email: "sara@decodelabs.tech" },
];

let nextId = 4;

module.exports = {
  getAll: () => interns,
  getById: (id) => interns.find((i) => i.id === id),
  add: (intern) => {
    const newIntern = { id: nextId++, ...intern };
    interns.push(newIntern);
    return newIntern;
  },
};
