import Image from "next/image";

const PageLoading = ({ isLoading }: any) => {
  if (isLoading) {
    return (
      <div className="relative">
        {/* Content wrapper */}
        <div className={isLoading ? "pointer-events-none blur-sm" : ""}>
          {/* Your page content goes here */}
        </div>

        {/* Loading screen */}
        {isLoading && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/20">
            <div>
              <Image
                src="/images/english/loading.svg"
                alt="loading"
                width={128}
                height={128}
                priority
                fetchPriority="high"
                className="size-32"
              />
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
