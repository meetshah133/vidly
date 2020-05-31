const movies = [
  {
    _id: 1,
    title: "Mai hoo na",
    genre: { _id: 1234, name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: 2,
    title: "Avengers",
    genre: { _id: 1234, name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 4.5,
  },
  {
    _id: 3,
    title: "Jai ho",
    genre: { _id: 1235, name: "Motivation" },
    numberInStock: 15,
    dailyRentalRate: 3.5,
  },
  {
    _id: 4,
    title: "Avtar",
    genre: { _id: 1234, name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
];

export function getMovies() {
  return movies;
}
