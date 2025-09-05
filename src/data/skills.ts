// src/data/skills.ts

export interface SkillCategory {
    category: string;
    skills: string[];
  }
  
  export const skillsData: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "R", "SQL"],
    },
    {
      category: "Data Science & Machine Learning",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React", "Next.js", "Node.js"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Google Colab", "Jupyter Notebook", "VS Code"],
    },
  ];
  