import React from 'react';

interface FooterSection {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

interface FooterLinksProps {
  sections: FooterSection[];
}

export const FooterLinks = ({ sections }: FooterLinksProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};