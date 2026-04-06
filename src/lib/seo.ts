type MetaEntry = {
  selector: string;
  attribute: "content" | "href";
  value: string;
};

interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogLocale?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

function setAttribute(
  selector: string,
  attribute: "content" | "href",
  value: string
) {
  const element = document.querySelector(selector);
  if (!element) return;
  element.setAttribute(attribute, value);
}

function getAttribute(
  selector: string,
  attribute: "content" | "href"
) {
  const element = document.querySelector(selector);
  if (!element) return null;
  return element.getAttribute(attribute);
}

export function setPageMetadata(metadata: PageMetadata) {
  const previousTitle = document.title;

  const entries: MetaEntry[] = [
    { selector: 'meta[name="description"]', attribute: "content", value: metadata.description },
    { selector: 'link[rel="canonical"]', attribute: "href", value: metadata.canonical },
    { selector: 'meta[property="og:title"]', attribute: "content", value: metadata.ogTitle ?? metadata.title },
    {
      selector: 'meta[property="og:description"]',
      attribute: "content",
      value: metadata.ogDescription ?? metadata.description,
    },
    { selector: 'meta[property="og:url"]', attribute: "content", value: metadata.ogUrl ?? metadata.canonical },
    { selector: 'meta[property="og:locale"]', attribute: "content", value: metadata.ogLocale ?? "fr_FR" },
    { selector: 'meta[name="twitter:title"]', attribute: "content", value: metadata.twitterTitle ?? metadata.title },
    {
      selector: 'meta[name="twitter:description"]',
      attribute: "content",
      value: metadata.twitterDescription ?? metadata.description,
    },
  ];

  const previousValues = entries.map((entry) => ({
    selector: entry.selector,
    attribute: entry.attribute,
    value: getAttribute(entry.selector, entry.attribute),
  }));

  document.title = metadata.title;
  for (const entry of entries) {
    setAttribute(entry.selector, entry.attribute, entry.value);
  }

  return () => {
    document.title = previousTitle;
    for (const entry of previousValues) {
      if (entry.value === null) continue;
      setAttribute(entry.selector, entry.attribute, entry.value);
    }
  };
}
