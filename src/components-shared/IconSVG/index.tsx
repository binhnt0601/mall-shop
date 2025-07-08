import clsx from 'clsx';
import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  src: string;
  className?: string;
  size?: number;
}

const IconSVG: React.FC<Props> = ({ src, className, size = 24 }) => {
  return (
    <div
      className={clsx(className, 'mask mask-icon')}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default IconSVG;
