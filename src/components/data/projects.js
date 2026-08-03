export const projects = [
  {
    id: 'ghl-lead-automation',
    title: 'Automated Lead Routing System',
    techStack: ['GHL', 'Make.com', 'Shopify'],
    banner: '/projects/ghl-lead-automation/banner.jpg', // full-width top image
    image: '/projects/b2b-partner-lifecycle/banner.jpg',
    description:
      'An automated pipeline that captures leads, tags them by source, and routes them to the right sales rep without manual entry.',
    steps: [
      {
        image: '/projects/ghl-lead-automation/step1.png',
        title: 'Capture',
        description:
          'Leads submit a form on the website, which triggers a webhook into Make.com carrying their contact details and source.',
      },
      {
        image: '/projects/ghl-lead-automation/step2.png',
        title: 'Process',
        description:
          'Make.com parses the payload, checks it against existing contacts in GHL, and creates or updates the record accordingly.',
      },
      {
        image: '/projects/ghl-lead-automation/step3.png',
        title: 'Route',
        description:
          'Based on lead source and value, the workflow assigns an owner and fires an internal Slack notification to the sales team.',
      },
    ],
    results: [
      {
        title: 'Time Saved',
        description: 'Cut manual lead entry from ~15 minutes to under 10 seconds per lead.',
      },
      {
        title: 'Zero Duplicates',
        description: 'Eliminated duplicate contact records across GHL and Shopify entirely.',
      },
      {
        title: 'Faster Response',
        description: 'Sales reps now get notified within seconds instead of hours.',
      },
    ],
  },
  {
    id: 'b2b-partner-lifecycle',
    title: 'B2B Partner Lifecycle, Discount & Renewal Automation Engine',
    techStack: ['Make.com', 'ClickUp API', 'QuickBooks Online API', 'OpenAI (AI routing agent)' ,'Google Docs API', 'Google Drive', 'Custom Webhooks', 'Gmail'],
    banner: '/projects/b2b-partner-lifecycle/banner.jpg',
    description:
      'Multi-scenario Make.com system running B2B Partner Program across five regional branches — from AI-driven intake routing through onboarding automation to QuickBooks-verified monthly renewal evaluation against a ₱1,000,000 spend threshold.',
    steps: [
      {
        image: '/projects/b2b-partner-lifecycle/step1.png',
        title: 'AI Branch Routing',
        description:
          'Webhook triggers on new partner task; AI reads the free-text location and classifies it into one of five branch codes based on sales territory, writing the result back to ClickUp.',
      },
      {
        image: '/projects/b2b-partner-lifecycle/step2.png',
        title: 'Onboarding Automation',
        description:
          'On approval, sets the renewal review date, sends a welcome email, and generates a personalized acknowledgement letter from a Google Docs template.',
      },
      {
        image: '/projects/b2b-partner-lifecycle/step3.png',
        title: 'Document Delivery',
        description:
          'Exports the letter to PDF, attaches it to the ClickUp task, and posts a signature-reminder comment.',
      },
      {
        image: '/projects/b2b-partner-lifecycle/step4.png',
        title: 'Monthly Spend Check',
        description:
          'Each branch subscenario calculates a dynamic date range and queries QuickBooks for year-to-date and prior-month invoice totals.',
      },
      {
        image: '/projects/b2b-partner-lifecycle/step5.png',
        title: 'Renewal-Month Routing',
        description:
          "Checks whether the current month is the partner's renewal month; if not, sends a routine progress-update email.",
      },
      {
        image: '/projects/b2b-partner-lifecycle/step6.png',
        title: 'Threshold Evaluationg',
        description:
          'In the renewal month, compares total invoiced amount against the ₱1,000,000 threshold to decide renew vs. expire.',
      },
      {
        image: '/projects/b2b-partner-lifecycle/step7.png',
        title: 'Renewal or Expiration',
        description:
          'If met: creates a new one-year task tagged "renewed," closes the old one, sends a confirmation. If not met: marks the partnership "ended" and sends an expiration notice.',
      },
    ],
    results: [
      {
        title: 'Zero Manual Audits',
        description: 'Replaced a manual monthly compliance review with a fully automated threshold check.',
      },
      {
        title: 'Consistent Enforcement',
        description: 'Every partner is evaluated against the same rules, removing case-by-case judgment calls.',
      },
      {
        title: 'Faster Decisions',
        description: 'Renewal and revocation decisions that used to take days now resolve automatically each month.',
      },
    ],
},
];