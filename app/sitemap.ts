import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const lastModified = '2026-09-08'

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/plans`, lastModified },
  ]
}