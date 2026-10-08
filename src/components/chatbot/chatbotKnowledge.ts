import { SOLUTIONS_DATA } from '../../data/solutions';
import { TEAM_MEMBERS } from '../../data/team';

export function getChatbotResponse(userInput: string): {
  text: string;
  showBookingBtn?: boolean;
} {
  const query = userInput.toLowerCase().trim();

  if (query.includes('price') || query.includes('cost') || query.includes('pricing') || query.includes('quote') || query.includes('fee')) {
    return {
      text: "Every business automation system is custom-architected based on your existing tools, data complexity, and workflow requirements. We don't publish generic price lists, but during a consultation we map out exact scope and ROI.",
      showBookingBtn: true
    };
  }

  if (query.includes('team') || query.includes('founder') || query.includes('who works') || query.includes('who are you') || query.includes('oladi') || query.includes('taiwo') || query.includes('kehinde')) {
    return {
      text: "NEWHEIGHT AI SYSTEMS is led by a team of six specialists: Oluwasegun Oladimeji (Co-Founder & Team Leader), Elijah Taiwo (Website & CRM Specialist), Isaniyi Kehinde (AI & Tender Specialist), Olaniyi (Graphic Designer), Ezekiel (Video Editor), and Omotola (CRM Specialist). We operate across the UK and Nigeria.",
      showBookingBtn: true
    };
  }

  if (query.includes('history') || query.includes('founded') || query.includes('2022') || query.includes('start') || query.includes('about')) {
    return {
      text: "NEWHEIGHT AI SYSTEMS was founded in 2022 as a 3-person automation business. Today, we are a 6-person specialist agency operating across the UK and Nigeria, having served 50+ businesses and delivered over 100 projects worldwide with a 4.9/5 rating.",
      showBookingBtn: true
    };
  }

  if (query.includes('support') || query.includes('customer service') || query.includes('ticket') || query.includes('chat bot')) {
    return {
      text: "Our AI Customer Support Automation system resolves up to 75% of routine tickets 24/7. It connects directly with Shopify, Zendesk, Intercom, and custom databases to handle order status queries and escalate edge cases cleanly.",
      showBookingBtn: true
    };
  }

  if (query.includes('voice') || query.includes('phone') || query.includes('receptionist') || query.includes('call')) {
    return {
      text: "Our AI Voice Receptionist answers phone calls 24/7 with ultra-low latency (<800ms) human speech. It can take messages, answer clinic or store FAQs, schedule appointments, and transfer urgent calls to live staff extensions.",
      showBookingBtn: true
    };
  }

  if (query.includes('crm') || query.includes('hubspot') || query.includes('salesforce') || query.includes('gohighlevel') || query.includes('pipeline')) {
    return {
      text: "We build CRM & Sales Pipeline Automations for HubSpot, Salesforce, GoHighLevel, and custom tools. We automate deal stage updates, rep task assignments, activity logging, and velocity tracking.",
      showBookingBtn: true
    };
  }

  if (query.includes('lead') || query.includes('qualification') || query.includes('speed to lead') || query.includes('booking')) {
    return {
      text: "Our AI Lead Qualification & Appointment system enriches inbound prospect data in seconds, scores intent (BANT), and automatically schedules discovery calls on your sales team's Google Calendar or Calendly.",
      showBookingBtn: true
    };
  }

  if (query.includes('document') || query.includes('pdf') || query.includes('tender') || query.includes('invoice') || query.includes('ocr')) {
    return {
      text: "Our AI Document & Data Processing pipeline extracts structured JSON data from heavy PDFs, invoices, contracts, receipts, and tender packages with 99%+ accuracy, syncing directly into your ERP or database.",
      showBookingBtn: true
    };
  }

  if (query.includes('ecommerce') || query.includes('shopify') || query.includes('cart') || query.includes('wismo')) {
    return {
      text: "Our E-commerce AI Automation handles abandoned checkout recoveries via WhatsApp/SMS, resolves WISMO tracking questions, and syncs multi-channel inventory automatically.",
      showBookingBtn: true
    };
  }

  if (query.includes('how it works') || query.includes('process') || query.includes('method') || query.includes('steps')) {
    return {
      text: "We follow a 4-step engineering methodology: 01 DISCOVER (operational friction audit), 02 DESIGN (system & data schema mapping), 03 BUILD (custom AI agent & integration development), and 04 OPTIMIZE (monitoring & scaling).",
      showBookingBtn: true
    };
  }

  if (query.includes('book') || query.includes('consult') || query.includes('meeting') || query.includes('talk') || query.includes('demo')) {
    return {
      text: "You can book an executive consultation directly with our engineering team. We'll review your business workflows and map out actionable automation opportunities.",
      showBookingBtn: true
    };
  }

  // Fallback guardrail strictly adhering to prompt instruction
  return {
    text: "I'd rather connect you with our team than give you the wrong information. Would you like to schedule a consultation with our system architects?",
    showBookingBtn: true
  };
}
