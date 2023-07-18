import { Markdown } from '@/app/_components/Markdown'

export const JourneyCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="word-break-word font-semibold">{title}</span>
      {description && <Markdown className="word-break-word m-0 block w-full overflow-hidden">{description}</Markdown>}
      {image?.url && (
        <div className="overflow-hidden rounded-xl mt-1">
          <img
            src={image.url}
            alt={image.title || image.description}
            width={image.width}
            height={image.height}
            className="animate-reveal"
          />
        </div>
      )}
    </div>
  )
}
