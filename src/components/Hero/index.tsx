import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          backgroundImage: `url('https://gps-india.org/wp-content/uploads/2024/09/vinoba-sewa-samman-1-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/50 z-0"></div> {/* Gray overlay */}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1
                  className="mb-20 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                  Vinoba Sewa Samman to GPS Founder
                </h1>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://gps-india.org/wp-content/uploads/2024/09/vinoba-sewa-samman-1-1.jpg"
                    className="inline-block rounded-3xl bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black dark:bg-blue-950 dark:text-white dark:hover:bg-blue-500"
                  >
                    Read On
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
