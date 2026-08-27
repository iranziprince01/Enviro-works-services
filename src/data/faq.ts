export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqs: FaqItem[] = [
  {
    category: "General",
    question: "What areas does Enviro Horizon Solutions serve?",
    answer:
      "We serve Edmonton, Sherwood Park, St. Albert, Beaumont, Leduc, and surrounding communities across the Edmonton metropolitan region.",
  },
  {
    category: "General",
    question: "Are you licensed, bonded, and insured?",
    answer:
      "Yes. Enviro Horizon Solutions Ltd carries full liability insurance, bonding, and WCB coverage. Certificates are available upon request for commercial and property management clients.",
  },
  {
    category: "General",
    question: "Do you offer both residential and commercial services?",
    answer:
      "Absolutely. We are a full-service property maintenance company serving homeowners, property managers, facility directors, and businesses of all sizes.",
  },
  {
    category: "Pricing",
    question: "How do I get a quote?",
    answer:
      "Request a free quote through our online form or call us directly. We typically respond within one business day with a customized proposal based on your property and scope.",
  },
  {
    category: "Pricing",
    question: "Do you require long-term contracts?",
    answer:
      "We offer flexible month-to-month, seasonal, and annual agreements. Many commercial clients prefer annual contracts for priority scheduling and bundled savings.",
  },
  {
    category: "Cleaning",
    question: "What cleaning products do you use?",
    answer:
      "We use professional-grade, eco-conscious products by default. If your facility has specific product requirements or sensitivities, we accommodate upon request.",
  },
  {
    category: "Cleaning",
    question: "Can you clean after business hours?",
    answer:
      "Yes. After-hours and weekend cleaning is standard for our commercial clients to minimize disruption to staff and customers.",
  },
  {
    category: "Snow Removal",
    question: "When do you dispatch snow removal crews?",
    answer:
      "We monitor weather 24/7 and dispatch based on agreed trigger depths. Priority commercial clients are typically serviced within 2–4 hours of accumulation.",
  },
  {
    category: "Snow Removal",
    question: "Do you offer emergency snow removal?",
    answer:
      "Yes. Call our emergency line for urgent ice and snow situations outside regular business hours.",
  },
  {
    category: "Landscaping",
    question: "When should I book spring landscaping?",
    answer:
      "We recommend booking by March for spring projects. Early scheduling ensures your property is ready when the growing season begins.",
  },
];
