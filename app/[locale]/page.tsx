import { useTranslation } from '@/lib/i18n'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AnimatedElement } from '@/components/shared/AnimatedElement'
import { AccentBtn } from '@/components/ui/AccentBtn'
import { FormIts } from '@/components/shared/FormIts'
import { DownloadWallet } from '@/components/shared/DownloadWallet'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const { t } = await useTranslation(locale, 'common')
  const lang = locale

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header locale={locale} t={t} />
      
      <main className="flex-1 max-w-[1280px] mx-auto pb-5 relative pt-20 lg:pt-50 w-full">
        {/* Hero Section */}
        <section className="mb-15 lg:mb-30 px-5 lg:px-0 py-10 lg:pt-0 relative">
          <div className="container mx-auto h-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-60 lg:mt-0">
              <div className="lg:col-span-2 grid gap-5 order-1">
                <h1 className="text-black uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black leading-tight z-9">
                  {t('index_h1')} <br />
                  {t('index_h1_2')}
                </h1>

                <p className="text-black text-xl sm:text-2xl md:text-[32px] z-9">
                  {t('index_h2')} {t('index_h2_2')}
                </p>

                <p className="text-black max-w-full lg:max-w-3/4 indent-3 z-9">
                  <span className="text-[#146EF5] font-bold text-2xl sm:text-3xl">
                    I.T.S
                  </span>
                  {t('index_p')}
                </p>

                <p className="text-black max-w-full lg:max-w-3/4 indent-3 z-9">
                  <span className="text-[#146EF5] font-bold text-2xl sm:text-3xl">
                    I.T.S
                  </span>
                  {t('index_p1')}
                </p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="absolute w-[800px] h-[60vh] -top-[85%] -left-[55%] sm:-left-[15%] md:translate-y-0 md:translate-x-[10%] lg:w-[800px] lg:h-[600px] lg:translate-x-1/1 opacity-90 lg:top-1/2 lg:-translate-y-1/2 transition-all duration-300 z-1">
              <img
                src="/index_img_w.png"
                alt="Main illustration"
                className="w-full h-full object-contain object-center"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Create Digital Future */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <p className="text-black text-[8vw] md:text-[52px] font-bold leading-tight mb-10">
              {t('index_h2_9')}
              <br />
              {t('index_h2_9_1')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="col-span-1 md:col-span-2 order-2 lg:order-1">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 items-start">
                    <img
                      src="/digitalfuture1.png"
                      className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]"
                      alt="Digital Future 1"
                    />
                    <p className="text-black text-lg md:text-xl font-normal">
                      {t('index_d_27')}
                    </p>
                  </div>
                  <div className="flex gap-5 items-start">
                    <img
                      src="/digitalfuture2.png"
                      className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]"
                      alt="Digital Future 2"
                    />
                    <p className="text-black text-lg md:text-xl font-normal">
                      {t('index_d_28')}
                    </p>
                  </div>
                  <div className="flex gap-5 items-start">
                    <img
                      src="/digitalfuture3.png"
                      className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]"
                      alt="Digital Future 3"
                    />
                    <p className="text-black text-lg md:text-xl font-normal">
                      <span className="text-[#146EF5] font-bold text-2xl sm:text-3xl">
                        I.T.S
                      </span>
                      {t('index_d_29')} {t('index_d_30')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 order-1 lg:order-2">
                <img
                  src={lang === "ru" ? "/digfuture.png" : "/digfuture_en.png"}
                  className="w-full h-auto"
                  alt="Digital Future"
                />
              </div>
            </div>
          </section>
        </AnimatedElement>

        {/* Mission */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <p className="text-black text-[8vw] md:text-[52px] font-bold leading-tight mb-10">
              {t('index_h2_12')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-y-5 gap-x-5 md:gap-x-20">
              <div className="order-1 lg:order-1 col-span-1 row-span-1 flex justify-center items-center bg-[#146EF5] relative overflow-hidden rounded-2xl">
                <p className="text-white text-[10vw] md:text-[52px] font-bold relative z-10">
                  01
                </p>
                <img
                  src="/mission_bg.png"
                  className="absolute z-1"
                  alt="Background"
                />
              </div>
              <div className="bg-[#F8F8F8] order-2 lg:order-2 col-span-1 row-span-2 flex flex-col gap-5 items-center p-6 rounded-2xl">
                <p className="text-black text-[7vw] md:text-2xl font-semibold">
                  {t('index_h3_3')} <br />
                </p>
                <p className="text-black text-[5vw] md:text-xl font-normal">
                  {t('index_d_36')}
                </p>
              </div>

              <div className="lg:order-3 order-5 col-span-1 row-span-1 flex justify-center items-center bg-[#146EF5] relative rounded-2xl overflow-hidden h-[200px]">
                <p className="text-white text-[10vw] md:text-[52px] font-bold relative z-10">
                  03
                </p>
                <img
                  src="/mission_bg.png"
                  className="absolute z-1 transform rotate-90"
                  alt="Background"
                />
              </div>
              <div className="bg-[#F8F8F8] lg:order-4 order-6 col-span-1 row-span-2 flex flex-col gap-5 items-center p-6 rounded-2xl">
                <p className="text-black text-[7vw] md:text-2xl font-semibold">
                  {t('index_h3_2')}
                </p>
                <p className="text-black text-[5vw] md:text-xl font-normal">
                  {t('index_d_35')}
                </p>
              </div>
              <div className="bg-[#F8F8F8] order-4 col-span-1 row-span-2 flex flex-col gap-5 items-center p-6 rounded-2xl">
                <p className="text-black text-[7vw] md:text-2xl font-semibold">
                  {t('index_h3_4')}
                </p>
                <p className="text-black text-[5vw] md:text-xl font-normal">
                  {t('index_d_37')}
                </p>
              </div>
              <div className="lg:order-5 order-3 col-span-1 row-span-1 flex justify-center items-center bg-[#146EF5] relative rounded-2xl overflow-hidden h-[200px]">
                <p className="text-white text-[10vw] md:text-[52px] font-bold relative z-10">
                  02
                </p>
                <img
                  src="/mission_bg.png"
                  className="absolute z-1 transform rotate-180"
                  alt="Background"
                />
              </div>
            </div>
          </section>
        </AnimatedElement>

        {/* About Us */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
              <p className="text-black text-[8vw] mb-5 sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight">
                {t('index_h2_8')}
              </p>
              <p className="text-black text-base sm:text-lg md:text-xl lg:text-[20px] indent-3">
                {t('index_d_17')}
              </p>
              <p className="text-black text-base sm:text-lg md:text-xl lg:text-[20px] indent-3">
                {t('index_d_18')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Card className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <p className="text-black text-xl sm:text-2xl font-semibold">
                    {t('index_d_19')}
                  </p>
                  <p className="text-black text-base sm:text-lg md:text-xl font-light">
                    {t('index_d_20')}
                  </p>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <p className="text-black text-xl sm:text-2xl font-semibold">
                    {t('index_d_21')}
                  </p>
                  <p className="text-black text-base sm:text-lg md:text-xl font-light">
                    {t('index_d_22')}
                  </p>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <p className="text-black text-xl sm:text-2xl font-semibold">
                    {t('index_d_23')}
                  </p>
                  <p className="text-black text-base sm:text-lg md:text-xl font-light">
                    {t('index_d_24')}
                  </p>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <p className="text-black text-xl sm:text-2xl font-semibold">
                    {t('index_d_25')}
                  </p>
                  <p className="text-black text-base sm:text-lg md:text-xl font-light">
                    {t('index_d_26')}
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </AnimatedElement>

        {/* Decentral */}
        <section className="mb-15 lg:mb-30 px-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10 relative">
            <div className="md:row-span-2 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-2">
              <p className="text-black max-w-full lg:max-w-1/2 text-[8vw] sm:text-4xl md:text-5xl lg:text-[52px] font-bold flex-shrink-0 z-99">
                {t('index_h2_10')}
              </p>
              <img
                src="/decentral_graph.png"
                alt="Decentralized graph"
                className="w-full max-w-[300px] md:max-w-none md:w-auto h-auto object-contain hidden lg:inline z-1 lg:mt-30 lg:mr-[-20px] lg:transform lg:-translate-x-30"
              />
            </div>

            <div className="hidden md:block"></div>

            <Card variant="bordered" className="p-4 sm:p-5 md:p-6">
              <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                {t('index_p4')}
              </p>
            </Card>

            <Card variant="bordered" className="p-4 sm:p-5 md:p-6">
              <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                {t('index_p2')}
              </p>
            </Card>

            <Card variant="bordered" className="p-4 sm:p-5 md:p-6">
              <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                {t('index_p5')}
              </p>
            </Card>

            <Card variant="bordered" className="p-4 sm:p-5 md:p-6">
              <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                {t('index_p3')}
              </p>
            </Card>

            <Card variant="bordered" className="p-4 sm:p-5 md:p-6">
              <p className="text-black text-base sm:text-lg md:text-xl font-normal">
                {t('index_p6')}
              </p>
            </Card>
          </div>
        </section>

        {/* Functions */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <div className="flex py-3 sm:py-4 md:py-5">
                <div className="flex flex-col justify-between gap-4 sm:gap-6">
                  <h2 className="text-black text-[8vw] sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight z-99">
                    {t('index_h2_11')}
                  </h2>
                  <p className="text-black text-xl sm:text-2xl font-semibold z-99">
                    {t('index_h3_1')}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center py-4 sm:py-0 order-first md:order-none">
                <img
                  src="/func_img.png"
                  alt="Functional illustration"
                  className="w-full sm:max-w-full md:max-w-[350px] md:w-auto h-auto object-contain z-1"
                />
              </div>

              <div className="flex py-3 sm:py-4 md:py-5">
                <div className="flex flex-col justify-between gap-4 sm:gap-6">
                  <p className="text-black text-lg sm:text-xl md:text-[24px] font-bold leading-tight z-9">
                    {t('index_d_32')}
                  </p>
                  <p className="text-black text-base sm:text-lg md:text-xl font-normal z-9">
                    {t('index_d_33')}
                  </p>
                  <p className="text-black text-xl sm:text-2xl font-semibold z-9">
                    {t('index_d_34')}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>

        {/* Solutions */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <div className="flex flex-col gap-5 mb-5">
              <p className="text-black text-[8vw] md:text-[52px] font-bold leading-tight">
                {t('index_h2_7')}
              </p>
              <p className="text-black text-[4vw] md:text-[20px] mb-5 indent-3">
                {t('index_d_5')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="col-span-1">
                <Card className="flex flex-col gap-5 p-6 h-full">
                  <div className="flex flex-1 flex-col gap-5">
                    <img
                      src="/solution1.png"
                      className="w-[108px] h-auto"
                      alt="Solution 1"
                    />
                    <p className="text-black text-2xl font-semibold">
                      {t('index_d_6')}
                    </p>
                  </div>
                  <p className="text-black text-xl font-light">
                    {t('index_d_7')} <br />
                    {t('index_d_8')}
                  </p>
                  <AccentBtn
                    to={`/${locale}/decentral`}
                    className="w-full py-4 text-xl"
                  >
                    {t('index_d_btn')}
                  </AccentBtn>
                </Card>
              </div>
              <div className="col-span-1">
                <Card className="flex flex-col gap-5 p-6 h-full">
                  <div className="flex flex-1 flex-col gap-5">
                    <img
                      src="/solution2.png"
                      className="w-[130px] h-auto"
                      alt="Solution 2"
                    />
                    <p className="text-black text-2xl font-semibold">
                      {t('index_d_9')}
                      {t('index_d_10')}
                    </p>
                  </div>
                  <p className="text-black text-xl font-light">
                    {t('index_d_11')} {t('index_d_12')}
                  </p>
                  <AccentBtn
                    targetSection="strategic"
                    to={`/${locale}/decentral`}
                    className="w-full py-4 text-xl"
                  >
                    {t('index_d_btn')}
                  </AccentBtn>
                </Card>
              </div>
              <div className="col-span-1">
                <Card className="flex flex-col gap-5 p-6 h-full">
                  <div className="flex flex-1 flex-col gap-5">
                    <img
                      src="/solution3.png"
                      className="w-[153px] h-auto"
                      alt="Solution 3"
                    />
                    <p className="text-black text-2xl font-semibold">
                      {t('index_d_13')} {t('index_d_14')}
                    </p>
                  </div>
                  <p className="text-black text-xl font-light">
                    {t('index_d_15')} {t('index_d_16')}
                  </p>
                  <AccentBtn
                    targetSection="createweb"
                    to={`/${locale}/decentral`}
                    className="w-full py-4 text-xl"
                  >
                    {t('index_d_btn')}
                  </AccentBtn>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedElement>

        {/* Invest */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="lg:order-1 order-2 col-span-1 md:col-span-2">
                <div className="flex flex-col gap-5">
                  <p className="text-black text-[6vw] md:text-[52px] font-bold leading-tight">
                    {t('index_h2_3')}
                    <br /> {t('index_h2_4')}
                  </p>
                  <p className="text-black text-[4vw] md:text-[20px] indent-3">
                    {t('index_d')}
                    <br />
                    <img
                      src="/coin.svg"
                      className="inline mb-1 mr-1"
                      alt="Coin"
                    />
                    {t('index_d1')}
                  </p>
                  <p className="text-black text-[4vw] md:text-[20px] indent-3">
                    {t('index_d_1')}
                  </p>
                </div>
              </div>
              <div className="hidden lg:block lg:order-2 w-full order-1 col-span-1 flex lg:justify-end">
                <img
                  src="/ifehu_monet2.png"
                  alt="Monet"
                  className="w-full max-w-[300px] h-auto"
                />
              </div>
            </div>
          </section>
        </AnimatedElement>

        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <DownloadWallet
              to={`/${locale}/statistics`}
              t={t}
            >
              {t('statistic_d_11_btn')}
            </DownloadWallet>
          </section>
        </AnimatedElement>

        {/* Blockchain */}
        <AnimatedElement>
          <section className="mb-15 lg:mb-30 px-5 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="order-2 lg:order-1 col-span-1 md:col-span-2">
                <div className="flex flex-col gap-5">
                  <p className="text-black text-[6vw] md:text-[52px] font-bold leading-tight">
                    {t('index_h2_5')}
                  </p>
                  <p className="text-black text-[4vw] md:text-[20px] mb-5 indent-3">
                    {t('index_d_2')}
                  </p>
                  <p className="text-black text-[4vw] md:text-[20px] mb-5 indent-3">
                    {t('index_d_3')}
                  </p>
                  <p className="text-black text-[4vw] md:text-[20px] mb-5 indent-3">
                    {t('index_d_4')}
                  </p>
                  <AccentBtn
                    targetSection="blockchain-feonyx"
                    to={`/${locale}/feonyx-blockchain`}
                    className="py-4 px-2 lg:max-w-100 text-center w-full"
                  >
                    {t('index_btn_feonyx')}
                  </AccentBtn>
                </div>
              </div>
              <div className="order-1 lg:order-2 col-span-1 flex justify-center lg:justify-end items-center h-full">
                <img
                  src="/block.png"
                  alt="Block"
                  className="w-full max-w-[300px] h-auto"
                />
              </div>
            </div>
          </section>
        </AnimatedElement>

        {/* Contact Form */}
        <AnimatedElement>
          <FormIts
            t={t}
            title={t('index_quest_header_default')}
          />
        </AnimatedElement>
      </main>

      <Footer locale={locale} t={t} />
    </div>
  )
}