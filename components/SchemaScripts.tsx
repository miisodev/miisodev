// ─── myClerkBook Product Schema ───────────────────────────────────────────────

export function ProjectSchema() {
  const myClerkBookSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://myclerkbook.com/#software",
    name: "myClerkBook",
    alternateName: "myClerkBook – AI Bookkeeping",
    description:
      "Privacy-first AI-powered bookkeeping platform for freelancers, entrepreneurs, and small business owners. No bank linking required — manual entry with AI document parsing, multi-currency support, and multiple dashboards.",
    url: "https://myclerkbook.com",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Bookkeeping",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Works in all modern browsers.",
    inLanguage: "en",
    offers: [
      {
        "@type": "Offer",
        "@id": "https://myclerkbook.com/#offer-basic",
        name: "Basic Plan",
        price: "5.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5.00",
          priceCurrency: "USD",
          billingDuration: "P1M",
          unitText: "month",
        },
        description:
          "100 transactions/month, single dashboard, 10 custom groups, basic API widgets, email notifications.",
        availability: "https://schema.org/InStock",
        url: "https://myclerkbook.com/#pricing",
      },
      {
        "@type": "Offer",
        "@id": "https://myclerkbook.com/#offer-premium",
        name: "Premium Plan",
        price: "10.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "10.00",
          priceCurrency: "USD",
          billingDuration: "P1M",
          unitText: "month",
        },
        description:
          "Unlimited transactions, up to 5 dashboards, unlimited custom groups, advanced widgets, email + WhatsApp + SMS notifications. Includes 7-day free trial.",
        availability: "https://schema.org/InStock",
        url: "https://myclerkbook.com/#pricing",
      },
      {
        "@type": "Offer",
        "@id": "https://myclerkbook.com/#offer-ai-chat",
        name: "AI Chat Add-on",
        price: "20.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20.00",
          priceCurrency: "USD",
          billingDuration: "P1M",
          unitText: "month",
        },
        description:
          "Conversational AI with web search, dashboard context switching, and WhatsApp access. Available for Basic and Premium users.",
        availability: "https://schema.org/InStock",
        url: "https://myclerkbook.com/#pricing",
      },
    ],
    featureList: [
      "AI-powered document parsing (receipts, invoices, statements)",
      "Multi-currency support (50+ currencies)",
      "Up to 5 independent dashboards",
      "Drag-and-drop customizable Smart Widgets",
      "No bank account linking required",
      "Manual entry with smart suggestions",
      "Recurring transaction tracking (weekly, monthly, yearly)",
      "Custom income and expense groups",
      "Real-time cash flow insights and alerts",
      "Export capabilities for tax preparation",
      "Role-based collaboration with version history",
      "WhatsApp, SMS, and email notifications",
      "Privacy-first architecture — no third-party data sharing",
    ],
    creator: {
      "@type": "Person",
      "@id": "https://miiso.dev/#person",
      name: "Kevin Miiso Novo",
      alternateName: "Miiso",
      url: "https://miiso.dev",
      email: "miisodev@gmail.com",
      sameAs: [
        "https://github.com/miisodev",
        "https://x.com/miisodev",
      ],
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://myclerkbook.com/#organization",
      name: "myClerkBook",
      url: "https://myclerkbook.com",
      logo: {
        "@type": "ImageObject",
        url: "https://myclerkbook.com/logo.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.reddit.com/r/myClerkBook/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "miiso@myclerkbook.com",
        contactType: "customer support",
      },
    },
    sameAs: [
      "https://www.reddit.com/r/myClerkBook/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(myClerkBookSchema, null, 0) }}
    />
  );
}

// ─── Blog Article Schema ───────────────────────────────────────────────────────

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  authorUrl?: string;
  slug: string;
  imageUrl?: string;
  wordCount?: number;
  tags?: string[];
}

export function ArticleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  author = "Kevin Miiso Novo",
  authorUrl = "https://miiso.dev",
  slug,
  imageUrl,
  wordCount,
  tags,
}: ArticleSchemaProps) {
  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://miiso.dev/blog/${slug}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://miiso.dev/blog/${slug}`,
    },
    headline: title,
    description,
    url: `https://miiso.dev/blog/${slug}`,
    datePublished: publishedDate,
    dateModified: modifiedDate ?? publishedDate,
    author: {
      "@type": "Person",
      "@id": "https://miiso.dev/#person",
      name: author,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://miiso.dev/#organization",
      name: "miisodev",
      url: "https://miiso.dev",
      logo: {
        "@type": "ImageObject",
        url: "https://miiso.dev/logo-publisher.png",
        width: 600,
        height: 60,
      },
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://miiso.dev/blog#blog",
      name: "miisodev Blog",
      url: "https://miiso.dev/blog",
    },
    inLanguage: "en",
  };

  if (imageUrl) {
    articleSchema.image = {
      "@type": "ImageObject",
      url: imageUrl,
    };
  }

  if (wordCount) {
    articleSchema.wordCount = wordCount;
  }

  if (tags?.length) {
    articleSchema.keywords = tags.join(", ");
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema, null, 0) }}
    />
  );
}

// ─── BreadcrumbList Schema ─────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
