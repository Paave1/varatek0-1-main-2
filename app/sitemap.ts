export default function sitemap() {
  const base = 'https://varatek.fi';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/jobs`, lastModified: new Date() },
  ];
}


