export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2023—2027",
    institution: "IIT Guwahati",
    degree: "Bachelor of Science [Hnrs.]",
    advisor: "Data Science & Artificial Intelligence",
  },
  {
    year: "2020—2023",
    institution: "Kunwari Chandrawati Degree College",
    degree: "Bachelor of Science",
    thesis: "Physics & Mathematics",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
