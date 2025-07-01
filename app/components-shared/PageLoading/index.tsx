import { loadingUrl } from '@/helpers/brand';

const PageLoading = ({ isLoading }: any) => {
  if (isLoading) {
    return (
      <div className="relative">
        {/* Content wrapper */}
        <div className={isLoading ? 'pointer-events-none blur-sm' : ''}>
          {/* Your page content goes here */}
        </div>

        {/* Loading screen */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
            <div>
              <img src={loadingUrl} alt="loading" className="size-32" />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default PageLoading;
