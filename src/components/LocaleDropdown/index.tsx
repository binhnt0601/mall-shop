import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const LocaleDropdown = () => {
  const router = useRouter();
  // const activeLocale = useActiveLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (locale: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, lng: locale },
      },
      undefined,
      { shallow: true },
    );
    setIsOpen(false);
  };

  const renderLocaleItem = (locale: string) => (
    <button
      key={locale}
      className={clsx(
        'w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100',
        // locale === activeLocale && 'font-bold text-[#FF7125]',
      )}
      onClick={() => handleLocaleChange(locale)}
    >
      <img className='h-5' src={`/flags/${locale}.png`} alt={locale} />
      {/* {LOCALE_LABEL()[locale]} */}
    </button>
  );

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex items-center justify-center gap-1 rounded-md p-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
      >
        <img
          className='h-4'
          // src={`/flags/${activeLocale}.png`}
          // alt={activeLocale}
        />
        <HiChevronDown
          size={18}
          className={clsx(
            'transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg'>
          {/* <div className='py-1'>{SUPPORTED_LOCALES.map(renderLocaleItem)}</div> */}
        </div>
      )}
    </div>
  );
};

export default LocaleDropdown;
