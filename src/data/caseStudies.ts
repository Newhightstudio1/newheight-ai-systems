import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    slug: 'global-logistics-ai-dispatch',
    clientType: 'International Freight & Logistics Provider',
    industry: 'Logistics & Supply Chain',
    title: 'Autonomous Dispatching & Exception Handling System',
    challenge: 'The client faced high manual workload coordinating dispatch updates, shipment tracking inquiries, and document verification across international freight lanes.',
    businessProblem: 'International freight lanes suffered from delayed dispatch notifications, lost bills of lading, and fragmented communications between drivers, port agents, and ops managers.',
    previousProcess: 'Three full-time dispatch coordinators spent 6+ hours daily manually logging into carrier portals, copy-pasting tracking numbers into emails, and answering phone calls.',
    systemBuilt: 'NEWHEIGHT engineered an end-to-end logistics automation pipeline connecting their TMS, WhatsApp API, and custom email parsing microservice.',
    implementationApproach: [
      'Phase 1: Inbound document and email parsing microservice deployed with OCR vision parsing',
      'Phase 2: Automated CargoTMS database state synchronization via custom REST webhooks',
      'Phase 3: Multi-channel WhatsApp & SMS notification router built for drivers and shippers',
      'Phase 4: Real-time exception handling dashboard with instant escalation triggers'
    ],
    architectureDetails: [
      'Multi-channel inbound parsing for bills of lading and shipment status updates',
      'AI Exception Router flagging delayed shipments and automatically notifying account managers',
      'Automated customer tracking portal with real-time API sync',
      'Centralized dispatch audit logger in PostgreSQL'
    ],
    toolsIntegrations: [
      'Python Microservices',
      'Twilio WhatsApp API',
      'Custom CargoTMS API',
      'PostgreSQL',
      'OpenAI Vision API'
    ],
    outcomeResults: [
      'Eliminated 85% of manual tracking inquiry emails',
      'Reduced dispatch exception resolution time from 3 hours to 12 minutes',
      'Provided 24/7 autonomous status updates for freight clients worldwide'
    ],
    isPlaceholder: false,
    image: '/assets/dispatch-dashboard.png',
    imageAlt: 'Autonomous Logistics Dispatching & Exception Handling System Interface Dashboard'
  },
  {
    id: '2',
    slug: 'ecommerce-revops-automation',
    clientType: 'High-Volume Direct-to-Consumer Brand',
    industry: 'E-commerce',
    title: 'Automated Post-Purchase & Abandoned Cart Recovery Engine',
    challenge: 'High customer acquisition costs required maximizing customer lifetime value and recovering abandoned checkouts across international markets.',
    businessProblem: 'A high-volume direct-to-consumer brand was losing over $40,000 monthly in abandoned checkouts and post-purchase support bottlenecks across European and North American markets.',
    previousProcess: 'Customer support representatives manually checked Shopify order queues, compiled daily Excel sheets of lost sales, and sent static, delayed follow-up emails.',
    systemBuilt: 'Constructed an integrated Shopify + Klaviyo + WhatsApp AI recovery framework with dynamic personalized follow-ups based on cart items.',
    implementationApproach: [
      'Phase 1: Real-time Shopify checkout event webhook listener integration',
      'Phase 2: Dynamic localization engine calculating regional shipping offers and multi-currency promotions',
      'Phase 3: Conversational AI recovery assistant configured for 2-way WhatsApp interaction',
      'Phase 4: WISMO order status automation module linked directly to courier carrier APIs'
    ],
    architectureDetails: [
      'Real-time abandoned checkout webhook event listeners',
      'Dynamic multi-currency offer calculation based on prospect location',
      'Automated 2-way SMS/WhatsApp conversational cart recovery assistant',
      'Automated WISMO (Where Is My Order) ticket resolution engine'
    ],
    toolsIntegrations: [
      'Shopify Plus API',
      'Klaviyo',
      'WhatsApp Business API',
      'Make / Custom Webhooks',
      'Zendesk AI Assistant'
    ],
    outcomeResults: [
      'Recovered 19.4% of abandoned checkouts within 2 hours',
      'Cut routine post-purchase support tickets by 72%',
      'Automated multi-currency post-purchase review capture'
    ],
    isPlaceholder: false,
    image: '/assets/cart-recovery-workflow.png',
    imageAlt: 'Post-Purchase & Abandoned Cart Recovery Engine n8n Workflow Blueprint'
  },
  {
    id: '3',
    slug: 'healthcare-appointment-voice-agent',
    clientType: 'Multi-Location Medical & Dental Practice',
    industry: 'Healthcare & Wellness',
    title: '24/7 AI Voice Receptionist & Patient Intake System',
    challenge: 'Front-desk staff were constantly interrupted by phone calls for appointments, prescription refills, and clinic hours, leading to patient hold times and missed calls.',
    businessProblem: 'Front-desk medical staff were overwhelmed by 150+ daily inbound calls, resulting in 15-minute patient hold times, missed after-hours calls, and a 22% appointment no-show rate.',
    previousProcess: 'Receptionists answered phone calls manually while managing physical clinic check-ins, leading to missed calls, inaccurate EHR appointment notes, and patient frustration.',
    systemBuilt: 'Deployed an ultra-low latency AI Voice Receptionist capable of natural phone conversation, intake triage, calendar booking, and emergency call transfer.',
    implementationApproach: [
      'Phase 1: Sub-800ms natural voice synthesis and speech-to-text pipeline setup',
      'Phase 2: HIPAA-compliant EHR and practice management calendar API sync',
      'Phase 3: Custom intake triage decision logic and instant live doctor transfer rules',
      'Phase 4: Automated pre-appointment SMS confirmation and cancellation processing'
    ],
    architectureDetails: [
      'Sub-800ms natural voice phone dialogue manager',
      'HIPAA-compliant patient schedule integration',
      'Automated SMS appointment reminder and confirmation engine',
      'Urgent call escalation logic directly transferring to on-call doctors'
    ],
    toolsIntegrations: [
      'Twilio SIP Trunking',
      'Retell / Custom Speech Engine',
      'Practice Management API',
      'Google Calendar Sync',
      'SMS Gateway'
    ],
    outcomeResults: [
      'Captured 100% of after-hours inbound patient calls',
      'Reduced clinic no-show rates by 38% through automated confirmation',
      'Reclaimed 4+ hours daily for clinic receptionists'
    ],
    isPlaceholder: false,
    image: '/assets/voice-receptionist-workflow.png',
    imageAlt: '24/7 AI Voice Receptionist & Patient Intake System n8n Automation Architecture'
  },
  {
    id: '4',
    slug: 'b2b-saas-speed-to-lead-pipeline',
    clientType: 'B2B Software & Consulting Enterprise',
    industry: 'B2B Services & Consulting',
    title: 'Instant Lead Enrichment, BANT Qualification & Routing Framework',
    challenge: 'Inbound high-value enterprise leads were waiting up to 24 hours for a sales response, allowing competitors to secure initial discovery calls.',
    businessProblem: 'Inbound high-value enterprise leads waited an average of 18 hours to hear back from sales executives, causing a 35% leak in qualified buyer opportunities.',
    previousProcess: 'Inbound website forms emailed static summaries to a shared inbox. Sales managers manually assigned leads to reps once or twice a day via spreadsheet.',
    systemBuilt: 'Built an instant speed-to-lead system that enriches firmographic data in under 2 seconds, qualifies intent, and immediately schedules demo calls on the assigned account executive calendar.',
    implementationApproach: [
      'Phase 1: Sub-second form submission listener and Clearbit/Apollo firmographic enrichment',
      'Phase 2: LLM BANT scoring model trained on historical closed-won deal attributes',
      'Phase 3: Dynamic sales rep round-robin calendar matching with instant demo booking',
      'Phase 4: Automatic HubSpot CRM deal creation and formatted Slack team alerts'
    ],
    architectureDetails: [
      'Inbound form listener with instant web scraping & Clearbit data enrichment',
      'BANT (Budget, Authority, Need, Timeline) intent scoring engine',
      'Round-robin sales rep calendar booking widget',
      'HubSpot CRM automatic contact enrichment and pipeline assignment'
    ],
    toolsIntegrations: [
      'HubSpot Enterprise CRM',
      'Clearbit / Apollo API',
      'Calendly API',
      'Slack Bot Webhooks',
      'Node.js Serverless Functions'
    ],
    outcomeResults: [
      'Reduced average speed-to-lead response time from 18 hours to 45 seconds',
      'Increased inbound visitor-to-booked-demo conversion by 42%',
      'Eliminated manual lead qualification tasks for sales executives'
    ],
    isPlaceholder: false,
    image: '/assets/lead-enrichment-workflow.png',
    imageAlt: 'Instant Lead Enrichment & BANT Qualification n8n Workflow Diagram'
  }
];
