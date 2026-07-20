export default function sitemap() {
  const baseUrl = 'https://www.iatsolutions.co'; // Adjust to actual domain later

  // Main pages
  const main = [
    '',
    '/about',
    '/services',
    '/contact',
  ];

  // Our Works pages — grouped under the "Our Works" nav dropdown.
  const worksPages = [
    '/solutions',      // Custom Solutions
    '/ai-solutions',   // AI Solutions
    '/web-ecommerce',  // Web & E-commerce
  ];

  // Dedicated service pages
  const servicePages = [
    '/services/crm-hrm-erp',
    '/services/mobile-app-development',
    '/services/custom-web-applications',
    '/services/cms-website-development',
    '/services/ai-ml-solutions',
    '/services/software-testing-qa',
  ];

  // Legal pages
  const legalPages = ['/terms', '/privacy'];

  const now = new Date();

  return [
    ...main.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...worksPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...servicePages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...legalPages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    })),
  ];
}