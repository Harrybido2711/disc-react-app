import lucasPhoto from "../assets/Photos/Lucas.jpg";
import CharlesPhoto from "../assets/Photos/Charles.jpg";
import EricPhoto from "../assets/Photos/Eric.jpg";

export const students = [ //make sure constant "students" are able to export to other files
  {
    id: 1,
    name: "Lucas",
    major: "ISP",
    interest: "Singing, Research",
    img: lucasPhoto,
  },
  {
    id: 2,
    name: "Charles",
    major: "LOC",
    interest: "Do magic, Startups",
    img: CharlesPhoto,
  },
  {
    id: 3,
    name: "Eric",
    major: "Applied Mathematics",
    interest: "Music",
    img: EricPhoto,
  },
];