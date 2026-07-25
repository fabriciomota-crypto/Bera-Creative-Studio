import React from 'react';
import teamContent from '../content/team.json';
import { useContent } from '../content/useContent';

export const Team: React.FC = () => {
  const t = useContent(teamContent);

  return (
    <section id="equipe" className="py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-[60ch]">
          <span className="block text-label uppercase text-accent mb-4">{t.eyebrow}</span>
          <h2 className="text-h2 font-heading text-text mb-6">
            {t.title} <span className="text-primary dark:text-accent">{t.titleHighlight}</span>
          </h2>
          <p className="text-bodyText text-textMuted">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {t.members.map((member) => (
            <div key={member.name} className="p-card bg-surface/50 border border-grey/25">
              <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-h3 font-heading font-black text-primary dark:text-accent">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-text mb-1">{member.name}</h3>
              <p className="text-textMuted text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
