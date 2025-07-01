import React from 'react';

import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import useViewPort from '@/hooks/useViewPort';

function ResponsiveBanner({
  id,
  headline,
  bodyText,
  media,
  mediaWidth = 66,
  align = 'left',
}) {
  const { isMediumScreenWidth } = useViewPort();

  const spacing = (type) => {
    if (align.includes(type) && !isMediumScreenWidth) {
      return type === 'left' ? 12.25 : 2.5;
    }

    return 0;
  };
  const direction = () =>
    ({
      right: isMediumScreenWidth ? 'column' : 'row-reverse',
      left: 'row',
    })[align] || 'column';

  const textContent = (
    <Box
      id={id}
      position="relative"
      flexDirection="column"
      display="flex"
      justifyContent="flex-end"
    >
      <Box
        position={{
          md: 'relative',
          lg: ['left', 'right'].includes(align) ? 'absolute' : 'relative',
        }}
        ml={spacing('right')}
        mr={spacing('left')}
        display="flex"
        flexDirection="column"
        textAlign="left"
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        pb={{ xs: 1.5, lg: 0 }}
      >
        <Typography
          pb={{ xs: 2, md: 3 }}
          sx={{
            typography: { xs: 'h5', md: 'h3' },
          }}
        >
          {headline}
        </Typography>
        <Typography
          sx={{
            typography: { xs: 'body1', md: 'h6' },
          }}
        >
          {bodyText}
        </Typography>
      </Box>
    </Box>
  );

  const mediaContent = (
    <Box
      position="relative"
      width={`${mediaWidth}%`}
      height="100%"
      borderRadius={4}
      overflow="hidden"
    >
      {media}
    </Box>
  );

  return (
    <Box
      position="relative"
      flexDirection={{
        xs: 'column',
        md: 'column',
        lg: direction(),
      }}
      display="flex"
      width="100%"
    >
      {mediaContent}
      {textContent}
    </Box>
  );
}

ResponsiveBanner.propTypes = {
  headline: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  media: PropTypes.node.isRequired,
  mediaWidth: PropTypes.number,
  align: PropTypes.oneOf(['left', 'right', 'bottom']),
  hasTextShadow: PropTypes.bool,
};
export default ResponsiveBanner;
