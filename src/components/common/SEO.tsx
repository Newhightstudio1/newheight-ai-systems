import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "NEWHEIGHT AI SYSTEMS — Intelligent AI Automation for Global Enterprises",
  description = "NEWHEIGHT AI SYSTEMS designs and implements intelligent AI agents, CRM workflows, business process automations, and custom AI solutions for businesses worldwide."
}) => {
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
