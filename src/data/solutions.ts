import { Service } from '../types';

export const SOLUTIONS_DATA: Service[] = [
  {
    id: '1',
    number: '01',
    slug: 'ai-customer-support',
    name: 'AI Customer Support Automation',
    shortDescription: 'Deploy 24/7 intelligent support agents that resolve tickets, access knowledge bases, and sync with your CRM without manual intervention.',
    fullDescription: 'Our AI Customer Support Automation system connects your knowledge base, existing ticket desks (Zendesk, Intercom, Freshdesk), and internal databases into a unified, autonomous support engine. Rather than basic rule-based chatbots, our agents understand context, query real-time order states, handle refunds within policy boundaries, and escalate edge cases seamlessly to human representatives with full conversation summaries.',
    whatItSolves: [
      'High response times and delayed ticket handling',
      'Overwhelmed support teams answering repetitive FAQs',
      'Inconsistent multi-channel support across web, WhatsApp, and email',
      'Manual data entry into CRM and desk software during customer calls'
    ],
    keyFeatures: [
      'Autonomous ticket triage and instant multi-lingual response',
      'Real-time integration with Shopify, Stripe, custom PostgreSQL/MySQL databases',
      'Intelligent escalation rules with sentiment analysis',
      'Automatic conversation summary generation and CRM note creation'
    ],
    architectureComponents: [
      'Retrieval-Augmented Generation (RAG) vector engine',
      'CRM & Order API Connectors',
      'Multi-channel web, WhatsApp, and email gateways',
      'Human-in-the-loop review dashboard'
    ],
    targetBusinessImpact: 'Reduces first-response time to under 10 seconds while handling up to 75% of routine support queries autonomously.',
    iconName: 'MessageSquareText'
  },
  {
    id: '2',
    number: '02',
    slug: 'ai-lead-qualification',
    name: 'AI Lead Qualification & Routing',
    shortDescription: 'Instantly evaluate inbound inquiries, score buyer intent, enrich prospect data, and route top opportunities directly to your sales reps.',
    fullDescription: 'Speed-to-lead dictates conversion rates. NEWHEIGHT AI Lead Qualification systems analyze inbound forms, emails, and chat interactions the moment they happen. The system enriches lead profiles using company registries and web signals, evaluates budget/authority/need/timeline (BANT), and instantly routes high-value prospects to the right account executive while dispatching tailored follow-ups.',
    whatItSolves: [
      'Slow response times leading to lost deals to competitors',
      'Sales reps wasting time on unqualified leads',
      'Incomplete prospect records in CRM',
      'Static routing rules that cause unfair lead distribution'
    ],
    keyFeatures: [
      'Sub-second inbound lead enrichment and intent scoring',
      'Dynamic rep matching based on deal size, territory, and rep workload',
      'Personalized instant response dispatches tailored to prospect industry',
      'Full CRM synchronization with auto-filled firmographic data'
    ],
    architectureComponents: [
      'Inbound Webhook & Form Listeners',
      'Firmographic Data Enrichment API',
      'LLM Intent Scoring & Decision Engine',
      'HubSpot / Salesforce / GoHighLevel Router'
    ],
    targetBusinessImpact: 'Increases qualified lead engagement rates by 3.5x by delivering instant response within 60 seconds of submission.',
    iconName: 'Filter'
  },
  {
    id: '3',
    number: '03',
    slug: 'ai-sales-appointment-automation',
    name: 'AI Sales & Appointment Automation',
    shortDescription: 'Convert website traffic and warm leads into confirmed calendar bookings through conversational AI booking workflows.',
    fullDescription: 'Eliminate back-and-forth scheduling friction. Our AI Sales & Appointment Automation system engages prospects across SMS, WhatsApp, email, or chat, qualifies their requirements dynamically, answers pre-call questions, and guides them directly to book a meeting on your team’s Google Calendar, Calendly, or custom scheduling platform.',
    whatItSolves: [
      'Leads dropping off during friction-heavy scheduling pages',
      'High meeting no-show rates due to lack of confirmation and reminder flows',
      'Manual timezone coordination and calendar clutter',
      'Inability to capture prospect context prior to sales calls'
    ],
    keyFeatures: [
      'Natural conversational scheduling via multi-channel messaging',
      'Automated SMS & email reminder sequences with attendance confirmation',
      'Pre-meeting intake questionnaire capture synced directly to CRM',
      'Conflict-free calendar synchronization across global sales teams'
    ],
    architectureComponents: [
      'Conversational AI Dialogue Manager',
      'Google / Outlook / Calendly API Sync',
      'Twilio / SMS & WhatsApp Automation Engine',
      'Sales Rep Round-Robin Distribution Node'
    ],
    targetBusinessImpact: 'Boosts booked meeting rate by up to 40% while reducing no-shows through automated confirmation workflows.',
    iconName: 'CalendarCheck'
  },
  {
    id: '4',
    number: '04',
    slug: 'ai-voice-receptionist',
    name: 'AI Voice Receptionist',
    shortDescription: 'Deploy human-sounding AI phone agents that answer calls 24/7, handle inquiries, take messages, and transfer urgent callers.',
    fullDescription: 'Never miss an inbound phone call again. NEWHEIGHT Voice Receptionists utilize ultra-low latency voice synthesis and natural language comprehension to handle incoming calls professionally. They handle FAQs, log detailed caller messages, collect lead information, book appointments over the phone, and transfer high-priority calls directly to live staff.',
    whatItSolves: [
      'Missed customer calls after hours or during peak periods',
      'High staff cost for dedicated front-desk call filtering',
      'Inaccurate or missing message logs from manual note-taking',
      'Disjointed telephone experience for callers'
    ],
    keyFeatures: [
      'Sub-800ms ultra-low latency natural voice conversation',
      'Intelligent live call transfer to mobile/office extensions based on urgent logic',
      'Automated transcript generation and call summary sent to Slack / Email / CRM',
      'Custom phone voice matching your brand tone and language region'
    ],
    architectureComponents: [
      'Twilio / SIP Voice Infrastructure',
      'Ultra-Fast Speech-to-Text & Text-to-Speech Engine',
      'Neural Dialogue State Tracking Engine',
      'CRM & Telephony Integration Webhook'
    ],
    targetBusinessImpact: 'Captures 100% of after-hours calls and eliminates receptionist phone overhead by over 60%.',
    iconName: 'PhoneCall'
  },
  {
    id: '5',
    number: '05',
    slug: 'automated-lead-follow-up',
    name: 'Automated Lead Follow-Up',
    shortDescription: 'Nurture cold and warm leads with hyper-personalized multi-touch email, SMS, and WhatsApp sequences that adapt based on recipient responses.',
    fullDescription: 'Static drip emails get ignored. Our Automated Lead Follow-Up architecture delivers dynamic multi-channel communications tailored to each prospect’s interactions. If a lead opens an email, clicks a link, or asks a specific question, the AI adjusts the tone, sequence cadence, and content automatically to drive them back into active sales conversations.',
    whatItSolves: [
      'Leads going cold due to inconsistent manual follow-up schedules',
      'Generic email drips with low open and reply rates',
      'Sales reps forgetting to touch base with long-cycle prospects',
      'Lack of multi-channel coordination across SMS, Email, and WhatsApp'
    ],
    keyFeatures: [
      'Behavior-driven sequence cadence adjustment',
      'Dynamic hyper-personalized copy generation tailored to lead industry and intent',
      'Automatic conversation pause the moment a human reply or booking is detected',
      'Omnichannel touchpoint tracking across Email, SMS, and WhatsApp'
    ],
    architectureComponents: [
      'Event-Driven Workflow Orchestrator (Make/n8n/Python)',
      'Adaptive Messaging Content Engine',
      'Omnichannel Dispatch Gateway',
      'Lead Status State Machine'
    ],
    targetBusinessImpact: 'Reactivates up to 28% of stagnant pipeline leads without expanding your sales headcount.',
    iconName: 'Repeat'
  },
  {
    id: '6',
    number: '06',
    slug: 'business-workflow-automation',
    name: 'Business Workflow Automation',
    shortDescription: 'Eliminate manual operational bottlenecks by connecting disparate software, internal tools, databases, and reporting channels.',
    fullDescription: 'Disjointed software forces employees to act as copy-paste human middleware. We audit your internal operations and build robust automated pipelines connecting your ERP, accounting, project management (Asana/ClickUp/Jira), Slack, and cloud storage systems into a seamless digital infrastructure.',
    whatItSolves: [
      'Manual data re-keying between disconnected software applications',
      'Human errors in internal reporting and order processing',
      'Delayed project handoffs between sales, operations, and fulfillment',
      'Lack of centralized real-time operational visibility'
    ],
    keyFeatures: [
      'End-to-end multi-app workflow synchronization',
      'Automated error handling, retry logic, and anomaly alerts',
      'Custom webhooks, API bridges, and database sync scripts',
      'Real-time automated status dashboards and Slack/Teams alerts'
    ],
    architectureComponents: [
      'Enterprise API Integration Layer',
      'Custom Python / Node.js Microservices',
      'Webhook Event Hub',
      'Central Monitoring & Error Logging System'
    ],
    targetBusinessImpact: 'Reclaims hundreds of lost team hours every month while reducing operational processing errors to near zero.',
    iconName: 'Workflow'
  },
  {
    id: '7',
    number: '07',
    slug: 'crm-sales-pipeline-automation',
    name: 'CRM & Sales Pipeline Automation',
    shortDescription: 'Transform your CRM into a proactive deal engine with automated stage progression, task generation, and revenue forecasting.',
    fullDescription: 'Most CRMs become cluttered databases because reps hate manual updates. NEWHEIGHT builds automated CRM architectures (HubSpot, Salesforce, GoHighLevel, Pipedrive) that update stage statuses automatically when key buyer triggers occur, auto-generate rep tasks, enforce pipeline hygiene, and send clear digest updates to management.',
    whatItSolves: [
      'Outdated CRM deal stages and poor pipeline visibility',
      'Reps spending 30%+ of their day manually logging activities',
      'Deals stagnating without clear follow-up tasks',
      'Inaccurate sales forecasts caused by missing deal data'
    ],
    keyFeatures: [
      'Trigger-based deal movement (e.g. quote view, contract sign, call completion)',
      'Automated sales activity logging from inbox and call logs',
      'Automated SLA monitoring to flag stagnant deals before they slip',
      'Executive Slack digests highlighting daily pipeline velocity'
    ],
    architectureComponents: [
      'HubSpot / Salesforce API Automation Suite',
      'Activity Sync Listeners (Email & Telephony)',
      'Pipeline Velocity Monitor',
      'Automated Executive Reporting Module'
    ],
    targetBusinessImpact: 'Increases rep selling time by 25% and eliminates missing pipeline data.',
    iconName: 'Kanban'
  },
  {
    id: '8',
    number: '08',
    slug: 'ai-document-data-processing',
    name: 'AI Document & Data Processing',
    shortDescription: 'Extract structured data from unstructured invoices, PDFs, contracts, receipts, and tender documents in seconds.',
    fullDescription: 'Stop manually reading and copying data from heavy PDF files. Our AI Document & Data Processing pipeline leverages vision-LLMs and optical character recognition (OCR) to ingest contracts, invoices, financial statements, or public tender packages, extract crucial data points with 99%+ accuracy, and feed structured JSON directly into your databases or ERP.',
    whatItSolves: [
      'Slow manual data entry from paper forms, receipts, and PDFs',
      'High labor costs associated with invoice processing and auditing',
      'Human copy-paste typos leading to financial mismatches',
      'Difficulty searching across thousands of scanned company contracts'
    ],
    keyFeatures: [
      'Multi-format ingestion: PDFs, PNGs, Excel, scanned paper documents',
      'Structured schema extraction (dates, line items, totals, signatures, clauses)',
      'Automated validation checks against database records (e.g. PO matching)',
      'Direct sync to Xero, QuickBooks, SAP, or custom PostgreSQL storage'
    ],
    architectureComponents: [
      'Vision-Enhanced Document Parser Engine',
      'Schema Validation & Anomaly Detector',
      'Database Ingestion Pipeline',
      'Audit Trail & Original File Archival Module'
    ],
    targetBusinessImpact: 'Accelerates document processing speeds by 10x while cutting document entry costs by up to 80%.',
    iconName: 'FileText'
  },
  {
    id: '9',
    number: '09',
    slug: 'ecommerce-ai-automation',
    name: 'E-commerce AI Automation',
    shortDescription: 'Automate post-purchase updates, inventory alerts, abandoned checkout recoveries, and customer order inquiries for scalable online stores.',
    fullDescription: 'E-commerce operations require speed and precision. We design specialized e-commerce automation systems that sync Shopify/WooCommerce stores with your fulfillment centers, automate customer order tracking notifications, run AI-driven win-back campaigns, and resolve return/exchange requests automatically.',
    whatItSolves: [
      'Repetitive "Where is my order?" (WISMO) support tickets',
      'High rates of abandoned checkouts without intelligent follow-up',
      'Manual inventory level sync errors across multiple sales channels',
      'Slow return and exchange processing workflow'
    ],
    keyFeatures: [
      'Automated real-time WISMO tracking response system',
      'AI dynamic abandoned cart recovery via WhatsApp & Email',
      'Multi-channel inventory threshold monitoring and automated supplier PO dispatch',
      'Self-service return & exchange approval workflow'
    ],
    architectureComponents: [
      'Shopify / WooCommerce Webhook Network',
      'Courier Tracking API Integration (FedEx, DHL, UPS, local logisticians)',
      'Klaviyo / WhatsApp Commerce Automation',
      'Inventory Alert Microservice'
    ],
    targetBusinessImpact: 'Recovers up to 18% of abandoned checkouts and handles 80% of post-purchase inquiries without staff intervention.',
    iconName: 'ShoppingCart'
  },
  {
    id: '10',
    number: '10',
    slug: 'custom-ai-systems',
    name: 'Custom AI Automation Systems',
    shortDescription: 'Tailor-made AI architecture engineered specifically for unique business operations, proprietary algorithms, and complex integrations.',
    fullDescription: 'When off-the-shelf software falls short, NEWHEIGHT engineers bespoke AI systems tailored to your exact operational requirements. From proprietary internal knowledge engines and automated tender analysis tools to complex predictive analytics and multi-agent AI workforces, we build scalable software solutions that fit your business like a glove.',
    whatItSolves: [
      'Unique operational bottlenecks that pre-made SaaS tools cannot solve',
      'Strict data privacy and security requirements demanding dedicated infrastructure',
      'Need for proprietary competitive advantage through custom AI models',
      'Complex multi-system enterprise environments requiring bespoke orchestration'
    ],
    keyFeatures: [
      'Fully custom software architecture designed around your exact business logic',
      'Dedicated vector search engines and fine-tuned domain-specific LLM models',
      'Private cloud deployment (AWS, GCP, Azure, or on-premise)',
      'Comprehensive documentation, training, and ongoing system optimization'
    ],
    architectureComponents: [
      'Bespoke Python / React / PostgreSQL / Vector Infrastructure',
      'Custom Multi-Agent Framework Orchestration',
      'Enterprise Security & Role-Based Access Control Layer',
      'Continuous Analytics & System Performance Dashboard'
    ],
    targetBusinessImpact: 'Delivers a defensible technology asset engineered to give your business an unfair operational advantage.',
    iconName: 'Cpu'
  }
];
