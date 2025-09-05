export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Satyam Vishwakarma",
  title: "B.Sc. [Hnrs.]",
  institution: "IIT Guwahati, India",
  // Note that links work in the description
  description:
    "I am a third-year <a href='https://www.iitg.ac.in'>BSc (Hons)</a> student in Data Science and Artificial Intelligence, with a strong interest in building practical skills in machine learning, data analysis, and AI-driven problem solving. I am exploring how data and algorithms can be applied to real-world challenges, while developing a solid foundation in statistics, programming, and computational thinking.",
  email: "v.satyam@op.iitg.ac.in",
  imageUrl:
    "/dp.jpg",
  githubUsername: "satyamvishuu",
  linkedinUsername: "satyamvishuu",
  twitterUsername: "satyamvishuu",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.iitg.ac.in",
  // altName: "",
  // secretDescription: "I like dogs.",
};
