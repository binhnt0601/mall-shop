import Typography from '@mui/material/Typography';

export default function HeadingText({ isUnderLine, title }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-20 flex max-w-max flex-col items-center">
        <Typography sx={{ typography: { xs: 'h4', md: 'h3' } }}>
          {title}
        </Typography>
        {isUnderLine && <hr className="mt-1 w-[45%] border-2 border-black" />}
      </div>
    </div>
  );
}
