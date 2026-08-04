export const projects = [
  {
    id: 'city-to-city-urban-policy',
    title: 'City-to-City Learning Through Urban Policy Analysis',
    image: '/projects/thesis-project/banner.jpg',
    techStack: ['Python', 'R', 'Structural Topic Modeling', 'Word2Vec', 'Shiny'],
    description:
      'Text-mining pipeline analyzing municipal ordinances from 22 Philippine cities to build an E-Governance Index and surface legislative themes.',
  },
  {
    id: 'b2b-partner-lifecycle',
    title: 'B2B Partner Lifecycle, Discount & Renewal Automation Engine',
    image: '/projects/b2b-partner-lifecycle/banner.jpg',
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
  {
    id: 'ghl-product-updates-via-api',
    title: 'GoHighLevel Product Pricing Sync via API',
    image: '/projects/ghl-product-updates/banner.jpg',
    techStack: ['Zapier', 'GoHighLevel API', 'Google Sheets', 'REST API', 'Webhooks'],
    banner: '/projects/ghl-product-updates/banner.jpg',
    description:
      "Automation connecting a client's Google Sheets pricing tool directly to their GoHighLevel product catalog, so updating a price in the spreadsheet automatically updates the live product price in GHL — no manual double entry.",
    steps: [
      {
        image: '/projects/ghl-product-updates/step1.png',
        title: 'Price Edited in Google Sheets',
        description:
          'The client updates a product price directly in the designated pricing sheet — the single point of entry for the whole workflow.',
      },
      {
        image: '/projects/ghl-product-updates/step2.png',
        title: 'Price Formatted for the API',
        description:
          'Zapier pulls the updated value and maps it to the corresponding product ID and price field expected by the GoHighLevel API.',
      },
      {
        image: '/projects/ghl-product-updates/step3.png',
        title: 'Product Price Updated in GHL',
        description:
          "GoHighLevel processes the request, updates the live product and the new price is reflected in GoHighLevel within 2-3 minutes of the original spreadsheet edit, completing the loop. — no manual entry required.",
      }
    ],
    results: [
      {
        title: 'No More Manual Double Entry',
        description: 'Price updates now flow from the spreadsheet straight into the live product catalog instead of being re-typed into GHL by hand.',
      },
      {
        title: '2-3 Minute Sync Time',
        description: 'Verified end-to-end test showed spreadsheet edits reflected in GoHighLevel within minutes.',
      },
      {
        title: 'Protected Against Breakage',
        description: 'Locked calculation cells prevent accidental edits to the formulas from silently breaking the automation.',
      },
    ],
  },
  {
    id: 'slab-quote-calculator',
    title: 'Multi-Branch Slab Quote Calculator',
    image: '/projects/slab-quote-calculator/banner.jpg',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'jsPDF'],
    banner: '/projects/slab-quote-calculator/banner.jpg',
    description:
      'A quoting tool for a stone and slab supplier with multiple regional branches, each carrying its own material inventory and pricing. Staff select a branch, add slab dimensions and materials, and get an instant, itemized customer quote as a downloadable PDF.',
    steps: [
      {
        image: '/projects/slab-quote-calculator/step1.jpg',
        title: 'Select Branch',
        description:
          'Staff pick the nearest branch (North, South, East, West, or Central), which loads that branch\'s specific material inventory and price list — each branch prices materials differently based on local supply.',
      },
      {
        image: '/projects/slab-quote-calculator/step2.jpg',
        title: 'Add Slabs',
        description:
          'For each slab needed, staff enter length, width, and quantity, then choose a material from that branch\'s inventory, grouped by stone category.',
      },
      {
        image: '/projects/slab-quote-calculator/step3.jpg',
        title: 'Calculate Delivery & Hauling',
        description:
          'The app applies a tiered per-kilometer delivery rate based on distance to the branch, plus a per-floor hauling surcharge based on slab count and building floor number.',
      },
      {
        image: '/projects/slab-quote-calculator/step4.jpg',
        title: 'Live Order Summary',
        description:
          'A running cost table totals material costs per slab, the delivery fee, and the hauling fee into a grand total that updates instantly as details change.',
      },
      {
        image: '/projects/slab-quote-calculator/step5.png',
        title: 'Export Quote as PDF',
        description:
          'One click generates a branded, itemized PDF quote — branch, date, line items, and grand total — ready to send straight to the customer.',
      },
    ],
    results: [
      {
        title: 'Instant, Consistent Quotes',
        description: 'Replaced manual price lookups and math with a quote generated in seconds, the same way every time.',
      },
      {
        title: 'Eliminated Cross-Branch Pricing Errors',
        description: "Branch-specific price lists prevent staff from accidentally quoting a customer using a different region's rates.",
      },
      {
        title: 'Professional, Ready-to-Send Deliverables',
        description: 'Every quote leaves the tool as a polished PDF instead of a handwritten or ad hoc estimate.',
      },
    ],
  },
  {
    id: 'shopify-storefront-builds',
    title: 'Shopify Storefront Builds',
    type: 'gallery',
    image: '/projects/shopify-storefront-builds/01.jpg',
    techStack: ['Shopify', 'Liquid', 'Custom Theming'],
    description:
      'A selection of Shopify storefronts designed and built for clients — custom theming, product page layouts, and storefront structure. Client branding has been kept, sensitive business details have not.',
    images: [
      '/projects/shopify-storefront-builds/01.png',
    ],
  },
];