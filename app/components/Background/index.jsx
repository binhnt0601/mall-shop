export default function Background({ textBackground, imgSrc, minHeight = '' }) {
    return (
        <div
            style={{
                position: 'relative',
                backgroundImage: `url(${imgSrc?.src || ''})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                minHeight,
                overflow: 'hidden',
                display: 'flex',
            }}
        >
            {textBackground}
        </div>
    );
}
