// All editable content lives here. Update this file to change the site.
window.SITE = {
  name: "Muhamad Nasser",
  title: "Digital Marketing Specialist",
  tagline: "Performance Marketing · SEO · Customer Acquisition · Marketing Analytics",
  location: "Al Khobar, Eastern Province, Saudi Arabia",
  email: "Muhamadnasser27@gmail.com",
  phone: "+966 50 724 2811",
  phoneRaw: "966507242811",
  cv: "assets/Muhamad_Nasser_CV.pdf",
  linkedin: "", // add a verified URL here to show a LinkedIn link
  highlights: [
    { value: "SAR 360K+", label: "tracked sales contribution, Feb–Nov 2026 (Boss Car Care)", note: "Tracked in company sales records; not platform-verified ad revenue." },
    { value: "3+ yrs", label: "digital marketing, entirely in the Saudi market", note: "May 2023 – present." },
    { value: "3", label: "ad platforms managed: Google Ads, Meta, TikTok", note: "Plus limited Snapchat Ads exposure." }
  ],
  skills: [
    { id: "seo", name: "SEO", detail: "Technical audits, on-page and off-page work, keyword research and search intent, content strategy and competitor analysis for Saudi e-commerce and service sites.", tools: "Google Search Console, GA4, Google Tag Manager, Salla, Zid, WordPress, Shopify, Easy Order, Wix, native sites", related: "Makaseb, Plans Agency, Azzrak, Boss Car Care" },
    { id: "paid", name: "Paid Media", detail: "Planning, targeting, optimizing and budgeting paid campaigns to generate qualified leads and new customers.", tools: "Google Ads, Meta Ads Manager, TikTok Ads Manager, Snapchat Ads (limited)", related: "Boss Car Care" },
    { id: "gads", name: "Google Ads", detail: "Paid search campaigns for lead generation.", tools: "Google Ads", related: "Boss Car Care" },
    { id: "meta", name: "Meta Ads", detail: "Paid social campaigns, audience targeting and retargeting.", tools: "Meta Ads Manager", related: "Boss Car Care" },
    { id: "tiktok", name: "TikTok Ads", detail: "Paid social campaigns on TikTok for lead generation.", tools: "TikTok Ads Manager", related: "Boss Car Care" },
    { id: "analytics", name: "Analytics", detail: "Channel-level performance reporting for management using Google Analytics, Search Console and Google Sheets.", tools: "Google Analytics, Search Console, Google Sheets", related: "Boss Car Care" },
    { id: "tracking", name: "Tracking", detail: "Lead-source tracking and conversion tracking so each channel can be judged by what it brings in.", tools: "Google Tag Manager, Google Sheets", related: "Boss Car Care" },
    { id: "acq", name: "Customer Acquisition", detail: "Turning paid and organic attention into leads and then customers, judged by sales outcomes rather than clicks.", tools: "Paid media, SEO, retargeting", related: "Boss Car Care" },
    { id: "ecom", name: "E-commerce", detail: "SEO for Saudi e-commerce brands on Salla, Zid, WordPress, custom-built (native) sites, Shopify, Easy Order and Wix, plus day-to-day order fulfillment, inventory and logistics for a family e-commerce business.", tools: "Salla, Zid, WordPress, Shopify, Easy Order, Wix, native sites", related: "Makaseb, Plans Agency, Azzrak, Family Business" },
    { id: "content", name: "Content Strategy", detail: "Social copy, SEO articles, landing page content and short-form video scripts; creative briefs for freelance designers and video editors.", tools: "WordPress, briefs", related: "VOO Agency, Makaseb, Boss Car Care" },
    { id: "sales", name: "Sales Alignment", detail: "Following each lead from enquiry to outcome with the Sales team, then using that feedback to refine targeting and retarget unconverted prospects.", tools: "Google Sheets, Qoyod (work environment), HubSpot CRM (basic exposure)", related: "Boss Car Care" }
  ],
  combos: [
    { name: "Customer Acquisition", needs: ["seo", "paid", "analytics", "sales"], text: "SEO and paid media create demand; analytics and Sales feedback show which of it becomes revenue." },
    { name: "Retargeting that learns", needs: ["meta", "tracking", "sales"], text: "Lead outcomes from Sales feed audience decisions so unconverted prospects are retargeted deliberately." },
    { name: "Search-led e-commerce growth", needs: ["seo", "ecom", "content"], text: "Category, product and content work built around how Saudi shoppers search." }
  ],
  roles: [
    { id: "boss", title: "Digital Marketing Specialist", org: "Boss Car Care", dates: "Dec 2025 – Present", place: "Saudi Arabia (Eastern Province)",
      points: [
        "Plan and execute integrated digital marketing initiatives for an automotive protection and window tinting company with branches across the Eastern Province, combining paid media, SEO and content.",
        "Plan, target, optimize and budget campaigns on Google Ads, Meta and TikTok to generate qualified leads and new customers.",
        "Contributed to over SAR 360K in tracked sales (February–November 2026) through integrated paid and organic digital marketing initiatives, from lead generation to customer acquisition.",
        "Work with the Sales team to follow each lead from enquiry to conversion or non-conversion, monitor lead quality, and use Sales feedback to refine targeting and retarget unconverted prospects.",
        "Manage SEO and website optimization, including keyword research, technical and on-page improvements and content updates.",
        "Use channel-level lead-source tracking, Google Analytics, Google Tag Manager and Google Sheets to evaluate performance and present results and recommendations to management; coordinate creative briefs with freelance designers and video editors."
      ], skills: "Google Ads, Meta, TikTok, SEO, analytics, Sales alignment" },
    { id: "makaseb", title: "Mid-Level SEO Specialist", org: "Makaseb Agency", dates: "Nov 2024 – Dec 2025", place: "Saudi Arabia",
      points: [
        "Developed and executed SEO strategies for multiple Saudi e-commerce brands, improving organic search visibility and supporting customer acquisition through technical optimization, keyword strategy and conversion-focused content.",
        "Managed content production and on-site optimization across Salla, Zid, WordPress, custom-built (native) sites, Shopify, Easy Order and Wix to improve organic visibility."
      ], skills: "Technical SEO, keyword strategy, content, Salla, Zid, WordPress, Shopify, Easy Order, Wix, native sites" },
    { id: "plans", title: "SEO Specialist", org: "Plans Agency", dates: "Jun 2024 – Nov 2024", place: "Saudi Arabia (Remote)",
      points: ["Executed on-page and off-page SEO for e-commerce and service clients, tracking performance in Google Search Console and Google Analytics and producing keyword and content gap analyses."], skills: "On-page, off-page, Search Console, GA" },
    { id: "azzrak", title: "SEO Specialist", org: "Azzrak", dates: "Nov 2023 – Jun 2024", place: "Saudi Arabia",
      points: ["Managed SEO for e-commerce client websites with niche keyword strategies and monthly reporting on rankings and organic traffic."], skills: "Keyword strategy, reporting" },
    { id: "voo", title: "Content Creator & Copywriter", org: "VOO Agency", dates: "May 2023 – Nov 2023", place: "Saudi Arabia",
      points: ["Wrote social media copy, SEO articles, landing page content and short-form video scripts for diverse clients."], skills: "Copywriting, SEO content" },
    { id: "family", title: "E-commerce & Brand Manager (alongside full-time roles)", org: "Family Business", dates: "Jul 2022 – Apr 2024", place: "",
      points: ["Managed day-to-day order fulfillment, inventory and logistics for a family e-commerce business, gaining hands-on experience of the order-to-delivery process, and grew the brand's Instagram presence."], skills: "E-commerce operations, Instagram" }
  ],
  certs: [
    "Udacity Digital Marketing Nanodegree (2021)",
    "Meta Social Media Marketing Professional Certificate",
    "Technical SEO (Blue Array)",
    "Semantic SEO Course",
    "SEO Fundamentals (Coursera)",
    "Digital Marketing Analytics Course",
    "Google Ads Pay-Per-Click Training (in progress)"
  ],
  education: "Bachelor's Degree in Business Administration, Mansoura University, Faculty of Commerce (English Section), 2017–2021",
  boss: {
    context: "Boss Car Care is an automotive protection and window tinting company with branches across the Eastern Province of Saudi Arabia (Dammam, Khobar, Jubail and Qatif). Customers buy considered, higher-value services such as paint protection film and tinting, so a lead only matters if it ends in a booked and paid job.",
    result: "Over SAR 360K in tracked sales, February–November 2026.",
    resultNote: "Source: the company's own monthly sales log. These are tracked sales attributed to marketing activity, shown as a commercial indicator. They are not platform-verified advertising revenue, and no ROAS, CAC or ad-spend figures are claimed here.",
    steps: [
      { h: "Channels", t: "Paid search on Google Ads, paid social on Meta and TikTok, and SEO on the company website, planned together as one acquisition effort." },
      { h: "My responsibilities", t: "Campaign planning, targeting, optimization and budgeting; SEO and website optimization; tracking and reporting; creative briefs for freelance designers and video editors." },
      { h: "How leads were generated", t: "Paid campaigns and organic search sent prospects to the business, where enquiries arrived as messages and calls to be handled by the Sales team." },
      { h: "Working with Sales", t: "I followed each lead from first enquiry to outcome: converted, still interested, or not buying. That feedback was the basis for judging lead quality by channel." },
      { h: "How outcomes were tracked", t: "Lead-source tracking, tracked links and starter messages, Google Analytics and Tag Manager for the website, and a Google Sheets sales log attributing each sale to its source." },
      { h: "Targeting and retargeting", t: "Sales outcomes were used to refine audiences and to retarget prospects who showed interest but had not converted." },
      { h: "Result", t: "A running record of tracked sales that let management see which channels brought in customers, not only enquiries." }
    ]
  },
  // SEO case studies. Client names are withheld; figures are Google Search Console exports.
  seoCases: [
   {
    "id": "fashion",
    "published": true,
    "title": "Fashion & Apparel",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Fierce competition from international brands",
    "strategy": "A Saudi fashion retailer was being outranked by global brands on every high-intent keyword. We pivoted to hyper-local content targeting Ramadan and Eid seasons with culturally tailored messaging for Saudi women. Product pages were restructured with local sizing guides and occasion-based collections.",
    "implementation": [],
    "results": "Clicks 105K (+51%), impressions 7.59M (+165%), average CTR 1.4% (-42%), average position 6.8 (stable).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "105K",
      "d": "+51%"
     },
     "impressions": {
      "v": "7.59M",
      "d": "+165%"
     },
     "ctr": {
      "v": "1.4%",
      "d": "-42%"
     },
     "position": {
      "v": "6.8",
      "d": "Stable"
     }
    }
   },
   {
    "id": "medical",
    "published": true,
    "title": "Medical Supplies",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Complex technical content and low search visibility",
    "strategy": "A medical supplies e-commerce store had zero SEO infrastructure. We built a full Arabic-language medical content library reviewed by licensed pharmacists, combined with complete technical SEO fixes. Schema markup for products and YMYL compliance were central to the strategy.",
    "implementation": [],
    "results": "Clicks 99.8K (+74.95%), impressions 6.43M (+146.45%), average CTR 1.6% (-27.27%), average position 10.5 (improved by 3.5 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "99.8K",
      "d": "+74.95%"
     },
     "impressions": {
      "v": "6.43M",
      "d": "+146.45%"
     },
     "ctr": {
      "v": "1.6%",
      "d": "-27.27%"
     },
     "position": {
      "v": "10.5",
      "d": "-3.5"
     }
    }
   },
   {
    "id": "grocery",
    "published": true,
    "title": "Grocery & Food",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 3 months vs. the previous 3 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Mixed search intent: informational vs. transactional",
    "strategy": "An online supermarket serving Riyadh and Jeddah struggled to capture purchase-ready traffic. We deployed geo-targeted landing pages for each district, built 'near me' keyword clusters, and optimized category pages for both informational and transactional intent within the same URL structure.",
    "implementation": [],
    "results": "Clicks 220K (+111.54%), impressions 2.52M (+43.24%), average CTR 8.7% (+47.46%), average position 12.6 (improved by 8.7 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 3 months with the previous 3 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 3,
    "metrics": {
     "clicks": {
      "v": "220K",
      "d": "+111.54%"
     },
     "impressions": {
      "v": "2.52M",
      "d": "+43.24%"
     },
     "ctr": {
      "v": "8.7%",
      "d": "+47.46%"
     },
     "position": {
      "v": "12.6",
      "d": "-8.7"
     }
    }
   },
   {
    "id": "electronics",
    "published": true,
    "title": "Electronics & Tech",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 3 months vs. the previous 3 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Long purchase cycle with heavy comparison behavior",
    "strategy": "A tech retailer was losing customers during the research phase to review sites and aggregators. We built a comprehensive comparison content hub in Arabic covering every major product category, targeting bottom-of-funnel keywords where purchase intent was highest.",
    "implementation": [],
    "results": "Clicks 35.3K (+41.8%), impressions 2.49M (+114.7%), average CTR 1.4% (-33%), average position 13.4 (improved by 3.4 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 3 months with the previous 3 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 3,
    "metrics": {
     "clicks": {
      "v": "35.3K",
      "d": "+41.8%"
     },
     "impressions": {
      "v": "2.49M",
      "d": "+114.7%"
     },
     "ctr": {
      "v": "1.4%",
      "d": "-33%"
     },
     "position": {
      "v": "13.4",
      "d": "-3.4"
     }
    }
   },
   {
    "id": "furniture",
    "published": true,
    "title": "Furniture & Home Decor",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Narrow keyword universe and niche search volume",
    "strategy": "A luxury furniture store was limited by a small pool of direct product keywords. We expanded the content strategy to lifestyle articles (renovation guides, room-size calculators, interior design trends), capturing users earlier in their decision journey and building topical authority.",
    "implementation": [],
    "results": "Clicks 45.3K (+61.70%), impressions 3.18M (+262.14%), average CTR 1.4% (-56.25%), average position 6.8 (improved by 0.8 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "45.3K",
      "d": "+61.70%"
     },
     "impressions": {
      "v": "3.18M",
      "d": "+262.14%"
     },
     "ctr": {
      "v": "1.4%",
      "d": "-56.25%"
     },
     "position": {
      "v": "6.8",
      "d": "-0.8"
     }
    }
   },
   {
    "id": "beauty",
    "published": true,
    "title": "Beauty & Personal Care",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 3 months vs. the previous 3 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Social media dominance cannibalizing organic search",
    "strategy": "A beauty e-commerce store was losing discovery traffic to Instagram and TikTok. The approach targeted the post-social search moment: users who see a product on social, then Google it for reviews and price comparison. We built ingredient-focused content and skin-type guides to capture this high-conversion traffic.",
    "implementation": [],
    "results": "Clicks 16K (+399.44%), impressions 1.3M (+796.83%), average CTR 1.2% (-45.45%), average position 7.5 (improved by 1.8 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 3 months with the previous 3 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 3,
    "metrics": {
     "clicks": {
      "v": "16K",
      "d": "+399.44%"
     },
     "impressions": {
      "v": "1.3M",
      "d": "+796.83%"
     },
     "ctr": {
      "v": "1.2%",
      "d": "-45.45%"
     },
     "position": {
      "v": "7.5",
      "d": "-1.8"
     }
    }
   },
   {
    "id": "sports",
    "published": true,
    "title": "Sports & Fitness",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Seasonal demand spikes and low off-peak retention",
    "strategy": "A sports retailer experienced massive Ramadan spikes but crashed to near-zero traffic afterward. We built a year-round content calendar with pillar pages covering fitness routines, nutrition guides and workout programs, turning a seasonal store into an always-on fitness resource.",
    "implementation": [],
    "results": "Clicks 254K (+63%), impressions 9.65M (+169%), average CTR 2.6% (-41%), average position 6.9 (improved by 2.4 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "254K",
      "d": "+63%"
     },
     "impressions": {
      "v": "9.65M",
      "d": "+169%"
     },
     "ctr": {
      "v": "2.6%",
      "d": "-41%"
     },
     "position": {
      "v": "6.9",
      "d": "-2.4"
     }
    }
   },
   {
    "id": "books",
    "published": true,
    "title": "Books & Education",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 3 months vs. the previous 3 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Competing against Amazon's dominant Saudi presence",
    "strategy": "A local bookstore could not compete with Amazon on generic book searches. We redefined the competitive battleground, focusing on Arabic-language books, school curriculum materials and curated reading lists that Amazon's algorithm deprioritizes. Niche authority over broad competition.",
    "implementation": [],
    "results": "Clicks 13.8K (+238%), impressions 1.2M (+265%), average CTR 1.2% (Stable), average position 6.9 (improved by 3.7 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 3 months with the previous 3 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 3,
    "metrics": {
     "clicks": {
      "v": "13.8K",
      "d": "+238%"
     },
     "impressions": {
      "v": "1.2M",
      "d": "+265%"
     },
     "ctr": {
      "v": "1.2%",
      "d": "Stable"
     },
     "position": {
      "v": "6.9",
      "d": "-3.7"
     }
    }
   },
   {
    "id": "pharmacy",
    "published": true,
    "title": "Online Pharmacy",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Google YMYL updates penalizing low-authority health content",
    "strategy": "An online pharmacy saw rankings drop after Google's health content updates. We rebuilt E-E-A-T signals from scratch: pharmacist-reviewed articles, license documentation, medical source citations and a structured author credentialing system, recovering and growing beyond original traffic levels.",
    "implementation": [],
    "results": "Clicks 206K (+44%), impressions 8.59M (+42.7%), average CTR 2.4% (Stable), average position 7.5 (improved by 0.1 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "206K",
      "d": "+44%"
     },
     "impressions": {
      "v": "8.59M",
      "d": "+42.7%"
     },
     "ctr": {
      "v": "2.4%",
      "d": "Stable"
     },
     "position": {
      "v": "7.5",
      "d": "-0.1"
     }
    }
   },
   {
    "id": "produce",
    "published": true,
    "title": "Local & Organic Produce",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 3 months vs. the previous 3 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Zero existing search demand for a new product category",
    "strategy": "A platform selling Saudi local farm produce online faced a unique challenge: people didn't know to search for it. We focused on demand creation: articles on the benefits of local produce, Saudi regional food names, and comparison content vs. imported alternatives, building a search category from scratch.",
    "implementation": [],
    "results": "Clicks 7K (+362.90%), impressions 552K (+116.72%), average CTR 1.3% (+116.67%), average position 7.8 (improved by 3.8 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 3 months with the previous 3 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 3,
    "metrics": {
     "clicks": {
      "v": "7K",
      "d": "+362.90%"
     },
     "impressions": {
      "v": "552K",
      "d": "+116.72%"
     },
     "ctr": {
      "v": "1.3%",
      "d": "+116.67%"
     },
     "position": {
      "v": "7.8",
      "d": "-3.8"
     }
    }
   },
   {
    "id": "toys",
    "published": true,
    "title": "Toys & Entertainment",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Sudden ranking collapse from new large-scale competitors",
    "strategy": "A toy retailer lost significant rankings when two major players entered the Saudi market. We restructured the entire content architecture around age ranges, occasions and gift guides, areas where large competitors lacked depth, rebuilding authority in specific niches rather than competing head-on.",
    "implementation": [],
    "results": "Clicks 70.3K (+684.50%), impressions 7.51M (+856.09%), average CTR 0.9% (-18.18%), average position 10.9 (improved by 7.1 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "70.3K",
      "d": "+684.50%"
     },
     "impressions": {
      "v": "7.51M",
      "d": "+856.09%"
     },
     "ctr": {
      "v": "0.9%",
      "d": "-18.18%"
     },
     "position": {
      "v": "10.9",
      "d": "-7.1"
     }
    }
   },
   {
    "id": "realestate",
    "published": true,
    "title": "Real Estate & Home Furnishing",
    "client": "Client identity withheld",
    "market": "Saudi Arabia · e-commerce",
    "period": "Last 6 months vs. the previous 6 months",
    "myPeriod": "",
    "myRole": "",
    "problem": "Complex multi-stage buyer journey with high-value decisions",
    "strategy": "A hybrid platform selling home furnishings to new property buyers had content for only one stage of the journey. We mapped the full buyer cycle, from 'how to furnish a new apartment' to specific room-size product recommendations, creating content that captured users at every decision point across a 3-6 month purchase cycle.",
    "implementation": [],
    "results": "Clicks 80.1K (+33.58%), impressions 4.66M (+93.88%), average CTR 1.7% (-32%), average position 6.1 (improved by 0.4 positions).",
    "evidence": [],
    "attribution": "Client identity withheld. Figures come from the client's Google Search Console, comparing the last 6 months with the previous 6 months. Search Console measures organic search visibility (clicks, impressions, CTR, position); it does not show revenue. A lower average position number means a better ranking.",
    "months": 6,
    "metrics": {
     "clicks": {
      "v": "80.1K",
      "d": "+33.58%"
     },
     "impressions": {
      "v": "4.66M",
      "d": "+93.88%"
     },
     "ctr": {
      "v": "1.7%",
      "d": "-32%"
     },
     "position": {
      "v": "6.1",
      "d": "-0.4"
     }
    }
   }
  ],
  problems: [
    { id: "p1", title: "High lead volume, low sales conversion", kind: "Educational scenario", symptoms: ["Many enquiries each week", "Few bookings", "Sales says leads are unqualified"],
      steps: ["Segment leads by source and check which sources book jobs, not which send the most messages.", "Ask Sales for the reason each lost lead did not convert (price, timing, service not offered, no reply).", "Tighten targeting and ad copy to filter out the mismatch; retarget interested but unconverted prospects."],
      lesson: "Judge channels by sales outcomes, not enquiry volume." },
    { id: "p2", title: "Weak organic visibility", kind: "Educational scenario", symptoms: ["Few service pages indexed", "Impressions low for key services", "Generic titles and descriptions"],
      steps: ["Check indexing and crawl issues in Search Console.", "Map each service to a keyword and intent; one page per intent.", "Rewrite titles, descriptions and headings; strengthen internal links to service pages."],
      lesson: "Fix crawl and structure first, then content." },
    { id: "p3", title: "E-commerce category structure issues", kind: "Educational scenario", symptoms: ["Products orphaned", "Duplicate category URLs from filters", "Thin category copy"],
      steps: ["Audit category hierarchy and internal links.", "Canonicalize or noindex filter URLs that duplicate categories.", "Add useful category copy and link from category to best-selling products."],
      lesson: "Categories carry commercial search demand; treat them as landing pages." },
    { id: "p4", title: "Tracking gaps", kind: "Educational scenario", symptoms: ["Leads with no known source", "Direct traffic unusually high", "No conversion events"],
      steps: ["Standardize UTM naming and use tracked links on every campaign.", "Set up conversion events in GA4 through Tag Manager.", "Record the source in the sales log when the lead is created."],
      lesson: "If the source is not recorded when the lead arrives, it cannot be recovered later." },
    { id: "p5", title: "Search campaign inefficiency", kind: "Educational scenario", symptoms: ["Clicks without enquiries", "Broad matches triggering irrelevant searches", "One ad group eats budget"],
      steps: ["Review the search terms report and add negatives.", "Split ad groups by intent; match ad copy to the landing page.", "Move budget toward groups that produce qualified enquiries."],
      lesson: "Search term review is the fastest efficiency lever." },
    { id: "p6", title: "Retargeting opportunities", kind: "Educational scenario", symptoms: ["Many visitors, few enquiries", "No audience lists built", "Same message for every audience"],
      steps: ["Build audiences from engagers and site visitors.", "Exclude people who already bought.", "Use a different message for people who showed interest but did not enquire."],
      lesson: "Retarget by stage in the journey, not everyone the same." }
  ],
  qa: [
    { q: "What makes your experience different?", a: "I started in content and SEO at Saudi agencies, then moved into paid media and customer acquisition. I can plan search and paid social together and judge them by sales outcomes, because I work with the Sales team on what happens to each lead." },
    { q: "How do you measure campaign success?", a: "By customers and tracked sales per channel, not by clicks or message volume. Cost and volume matter, but only alongside lead quality and what Sales actually closes." },
    { q: "How do you connect marketing with Sales?", a: "I follow leads from first enquiry to outcome with Sales, record the source, and use their feedback on lead quality to refine targeting and retarget prospects who did not convert." },
    { q: "What is your experience with Saudi e-commerce?", a: "Two years in SEO at Saudi agencies on e-commerce and service sites across Salla, Zid, WordPress, custom-built (native) sites, Shopify, Easy Order and Wix, covering technical optimization, keyword strategy and content, plus hands-on order fulfillment, inventory and logistics for a family e-commerce business." },
    { q: "How do you approach underperforming campaigns?", a: "Check tracking first, then the audience and message, then the landing page and the follow-up speed. I change one thing at a time so I can tell what worked." },
    { q: "How do SEO and paid media complement each other?", a: "Paid gives fast data on which messages and keywords convert; SEO builds lasting visibility for the ones that do. Search term data from paid also feeds keyword research." }
  ],
  about: "My career moved from content creation into SEO, then e-commerce growth, then paid media and integrated digital marketing. Across all of it, my focus is connecting marketing activity to customers and revenue. I work entirely in the Saudi market and I am building toward broader marketing responsibility through hands-on results."
};
