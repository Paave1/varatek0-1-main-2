export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://varatek.fi/sitemap.xml',
    host: 'https://varatek.fi',
  } as const;
}


