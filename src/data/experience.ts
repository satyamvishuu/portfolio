export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2025",
    title: "Movie Recommendation System",
    company: "[Live Link]",
    description:
      "Implemented a content-based recommender using Bag of Words, stemming (NLTK), vectorization, and Euclidean distance on a dataset of 4,803 movies.",
    advisor: "Content Based Recommendation System",
    companyUrl: "https://deepmind.com",
  },
  {
    date: "June 2025",
    title: "Student Performance Predictor",
    company: "[Link]",
    description:
      "Built an end-to-end machine learning pipeline on a dataset of 1,000 records, achieving an R² score of 0.87 using Scikit-learn, XGBoost, and CatBoost.",
    manager: "Personal Project / Deployed on AWS EC2 ",
    companyUrl: "https://google.com",
  },
  {
    date: "June 2024",
    title: "ChatWithPDF-AI",
    company: "[Link]",
    description:
      "Created a GenAI web application enabling users to query and analyze PDF documents through natural language interaction.",
    manager: "GenAI Project ",
    companyUrl: "https://google.com",
  },
];
