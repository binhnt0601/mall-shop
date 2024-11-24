import Image from 'next/image'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

export default function Card({ imgSrc, title, description, size }) {
  return (
    <CardContent
      className="bg-white flex flex-col items-center"
      sx={{
        paddingX: 0
      }}
    >
      {imgSrc && (
        <Image
          loading="lazy"
          src={imgSrc}
          width={size}
          height="auto"
          alt={title}
        />
      )}
      <Typography
        fontWeight="bold"
        gutterBottom
        variant="h6"
        className={`${imgSrc ? 'pt-6' : ''} pb-1 text-center`}
      >
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  )
}
