interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
    images: ImageMetadata[];
}

import columbia1 from '../assets/images/columbiaSS/columbia1.jpeg';
import columbia2 from '../assets/images/columbiaSS/columbia2.png';
import columbia3 from '../assets/images/columbiaSS/columbia3.jpeg';

const education: Education[] = [
  {
    title: "M.S. in Computer Science – Focus in ML & AI",
    startDate: "2023-08-01",
    endDate: "2024-12-31",
    school: "Columbia University in City of New York",
    location: "New York, United States",
    description:
      "Focused on ML, AI, NLP, Data Visualization, AR/VR, UI Design, and Human-Computer Interaction. Served as TA for UI Design, Databases, and Computing in Context.",
    currentUni: false,
    images: [columbia1, columbia2, columbia3],
  },
  // {
  //   title: "Bachelor of Technology in Computer Science",
  //   startDate: "2017-07-01",
  //   endDate: "2021-05-31",
  //   school: "Gokaraju Rangaraju Institute of Engineering and Technology",
  //   // school: "GRIET",
  //   location: "Hyderabad, India",
  //   description:
  //     "Completed with merit scholarship and department topper accolade. Core coursework included AI, Data Structures, Big Data, and Operating Systems.",
  //   currentUni: false,
  //   image: columbiaLogo,
  // },
];

export default education;