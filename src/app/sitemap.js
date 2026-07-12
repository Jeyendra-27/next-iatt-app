export default function sitemap() {
  const baseUrl = 'https://www.iatsolutions.co'; // Adjust to actual domain later

  // Main pages
  const main = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/ai-solutions',
    '/web-ecommerce',
    '/contact',
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

  const now = new Date();

  return [
    ...main.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...servicePages.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}