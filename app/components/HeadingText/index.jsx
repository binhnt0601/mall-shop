import Typography from '@mui/material/Typography';

export default function HeadingText({ isUnderLine, title }) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-20 max-w-max">
                <Typography sx={{ typography: { xs: 'h4', md: 'h3' } }}>
                    {title}
                </Typography>
                {isUnderLine && (
                    <hr className="w-[45%] border-black border-2 mt-1" />
                )}
            </div>
        </div>
    );
}
