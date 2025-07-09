import clsx from 'clsx';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { HiChevronRight } from 'react-icons/hi';

export default function BreadCrumbs({
  breadcrumbs,
  ...props
}: {
  breadcrumbs: {
    href?: string;
    label: string;
  }[];
  className?: string;
  style?: CSSProperties;
  children?: any;
}) {
  return (
    <div
      className={clsx('flex items-center', props.className)}
      style={props.style}
    >
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <span key={index} className='flex items-center'>
            {!isLast && breadcrumb.href ? (
              <>
                <Link
                  className={clsx(
                    'hover:text-primary hover:opacity-100 hover:underline text-14',
                    index === 0 && 'opacity-50',
                  )}
                  href={breadcrumb.href}
                >
                  <span>{breadcrumb.label}</span>
                </Link>
                <HiChevronRight className='mx-2 text-gray-400' />
              </>
            ) : (
              <span className='text-primary font-medium cursor-not-allowed'>
                {breadcrumb.label}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
