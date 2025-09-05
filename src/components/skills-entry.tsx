// src/components/skills-entry.tsx

import { SkillCategory } from "../data/skills";

interface SkillsEntryProps {
  skillCategory: SkillCategory;
}

export function SkillsEntry({ skillCategory }: SkillsEntryProps) {
  return (
    <div>
      <h3 className="text-sm text-zinc-500 mt-2 mb-4 italic">
        {skillCategory.category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {skillCategory.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
