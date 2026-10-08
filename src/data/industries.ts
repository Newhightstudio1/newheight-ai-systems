import { Industry } from '../types';

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Scale direct-to-consumer sales, automate order management, and deliver instant multi-channel customer resolution.',
    typicalProblem: 'High volume of routine WISMO queries, abandoned checkouts, manual inventory tracking across sales channels, and slow returns handling.',
    aiOpportunity: 'Deploy autonomous support bots, WhatsApp checkout recovery engines, and automated multi-channel inventory sync.',
    possibleSystems: [
      'Shopify & WooCommerce AI Support Agents',
      'WhatsApp Abandoned Cart Recovery Sequences',
      'Automated Order & Return Sync Architecture',
      'Inventory Threshold Supplier Re-order Bots'
    ],
    iconName: 'ShoppingCart'
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate & Property',
    description: 'Capture prospective buyers and tenants instantly, automate property viewing scheduling, and maintain clean CRM records.',
    typicalProblem: 'Inbound portal inquiries (Zillow, Rightmove, direct site) slipping through cracks due to delayed agent response.',
    aiOpportunity: 'Instant 24/7 lead qualification, automated SMS/WhatsApp viewing booking, and automated property intake management.',
    possibleSystems: [
      'AI Property Intake & Buyer Qualification Bot',
      'Automated Viewing Scheduling System',
      'CRM Deal Pipeline Sync for Agents',
      'AI Tenant Maintenance Request Triage'
    ],
    iconName: 'Building'
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Wellness',
    description: 'Eliminate phone queues, automate appointment scheduling, and deliver secure patient follow-up sequences.',
    typicalProblem: 'Overwhelmed clinic receptionists, missed patient calls after hours, high appointment no-show rates.',
    aiOpportunity: 'AI Voice Receptionists, automated appointment confirmations via SMS, and HIPAA-compliant patient intake flows.',
    possibleSystems: [
      '24/7 AI Voice Phone Receptionist',
      'Automated Appointment Confirmation & Reminders',
      'Digital Patient Intake Form Processing',
      'After-Hours Emergency Call Escalation'
    ],
    iconName: 'HeartPulse'
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Streamline legal, accounting, and consulting operations with automated document extraction and client onboarding.',
    typicalProblem: 'Hundreds of hours wasted copying data from contracts, invoices, and client tax documents into practice management software.',
    aiOpportunity: 'Vision-LLM document processing pipelines, automated client intake questionnaires, and CRM stage updates.',
    possibleSystems: [
      'AI Contract & Invoice Data Extractor',
      'Automated Client Onboarding Pipeline',
      'Tender & Proposal Analysis System',
      'Practice Management CRM Sync'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'home-services',
    slug: 'home-services',
    name: 'Home Services & Contracting',
    description: 'Turn calls into booked jobs, capture job site photos, and automate quote follow-ups for trades and field services.',
    typicalProblem: 'Contractors losing jobs because they are on a roof or site and cannot answer inbound call inquiries immediately.',
    aiOpportunity: 'Instant phone voice response, automated SMS quote dispatches, and automated job scheduling.',
    possibleSystems: [
      'AI Trades Call Receptionist & Booking Bot',
      'Automated SMS Quote Follow-Up Sequence',
      'Field Staff Dispatch & Job Notice Automation',
      'Google Review Automated Request Engine'
    ],
    iconName: 'Wrench'
  },
  {
    id: 'agencies',
    slug: 'agencies',
    name: 'Agencies & Media',
    description: 'Automate client reporting, project handoffs, prospect outreach, and proposal generation for digital agencies.',
    typicalProblem: 'Account managers spending days compiling manual monthly client analytics decks and chasing client approvals.',
    aiOpportunity: 'Automated multi-platform reporting digests, AI prospect outreach, and automated project intake.',
    possibleSystems: [
      'Automated Client Monthly KPI Dashboard Generator',
      'AI Inbound Agency Prospect Qualification',
      'Project Management Task Auto-Creator (Asana/ClickUp)',
      'Automated Invoice & Retainer Collector'
    ],
    iconName: 'Layers'
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hospitality & Leisure',
    description: 'Deliver instant guest responses, streamline reservation bookings, and automate feedback collection.',
    typicalProblem: 'Guests asking repetitive questions about check-in, amenities, parking, and dining reservations across multiple channels.',
    aiOpportunity: 'WhatsApp guest concierge, automated booking confirmations, and post-stay review management.',
    possibleSystems: [
      '24/7 Guest Concierge AI Assistant',
      'Automated Reservation & Event Booking System',
      'Multi-lingual Guest Messaging Portal',
      'Automated Review & Reputation Manager'
    ],
    iconName: 'Coffee'
  },
  {
    id: 'b2b-companies',
    slug: 'b2b-companies',
    name: 'B2B Companies',
    description: 'Shorten enterprise sales cycles, automate RFP analysis, and orchestrate complex lead nurturing workflows.',
    typicalProblem: 'Long sales cycles with disjointed communication touchpoints, manual CRM updates, and lost momentum.',
    aiOpportunity: 'Automated BANT qualification, dynamic proposal generation, and enterprise speed-to-lead routing.',
    possibleSystems: [
      'Enterprise Speed-to-Lead Router',
      'Automated RFP & Tender Evaluator',
      'CRM Pipeline Velocity Enforcement Bot',
      'Account-Based Marketing AI Workflow'
    ],
    iconName: 'Globe'
  },
  {
    id: 'consulting',
    slug: 'consulting',
    name: 'Consulting & Advisory',
    description: 'Automate client discovery assessments, report generation, and calendar scheduling for independent advisory firms.',
    typicalProblem: 'Consultants losing billable hours to administrative logistics, calendar coordination, and proposal writing.',
    aiOpportunity: 'Automated discovery questionnaires, self-service consultation scheduling, and automated document synthesis.',
    possibleSystems: [
      'Consultation Booking & Payment Workflow',
      'Automated Client Intake Assessment Synthesizer',
      'Knowledge Base RAG Search for Advisory Teams',
      'Client Retainer Billing & Reminder Pipeline'
    ],
    iconName: 'UserCheck'
  },
  {
    id: 'growing-smes',
    slug: 'growing-smes',
    name: 'Growing SMEs',
    description: 'Empower small-to-medium teams to operate with the leverage and efficiency of enterprise workforces.',
    typicalProblem: 'Small teams wearing too many hats, leading to missed follow-ups, operational chaos, and burnout.',
    aiOpportunity: 'Modular workflow automation connecting CRM, email, calendar, and accounting into one cohesive operating system.',
    possibleSystems: [
      'All-in-One SME Operating Automation Suite',
      'Lead-to-Cash Pipeline Automation',
      'Customer Support & FAQ AI Agent',
      'Automated Financial & Invoice Tracker'
    ],
    iconName: 'TrendingUp'
  }
];
