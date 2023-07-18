import { ImageResponse } from 'next/server'

import { OpenGraphImage } from '@/app/_components/OpenGraphImage'
import { getPageSeo } from '@/lib/contentful'
import { getMediumFont, getBoldFont } from '@/lib/utils'
import { image } from '@/app/shared-metadata'

export const runtime = 'edge'
export const alt = 'Bookmarks'
export const size = {
  width: image.width,
  height: image.height
}
export const contentType = image.type

export default async function Image() {
  const seoData = (await getPageSeo('bookmarks')) ?? null
  const { title, seoDescription } = seoData

  return new ImageResponse(
    (
      <OpenGraphImage
        title={title}
        description={seoDescription}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        }
        url="bookmarks"
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: 'SF Pro',
          data: await getMediumFont(),
          style: 'normal',
          weight: 500
        },
        {
          name: 'SF Pro',
          data: await getBoldFont(),
          style: 'normal',
          weight: 600
        }
      ]
    }
  )
}
