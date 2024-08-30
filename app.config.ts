export default defineAppConfig({
  title: 'Lenda Links',
  description: 'Acortador de enlaces de Lenda Pet Food. <br />Powered by Sink',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
