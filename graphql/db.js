export const people = [
  {
    id: 0,
    name: "Yusang",
    age: 24,
    gender: "male",
  },
  {
    id: 1,
    name: "ys",
    age: 23,
    gender: "male",
  },
  {
    id: 2,
    name: "jys",
    age: 25,
    gender: "male",
  },
  {
    id: 3,
    name: "marigold",
    age: 21,
    gender: "female",
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
}