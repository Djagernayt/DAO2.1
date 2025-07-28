'use client'

import { AccentBtn } from '@/components/ui/AccentBtn'

interface DownloadWalletProps {
  t: any
  to?: string
  targetSection?: string
  text?: string
  children?: React.ReactNode
}

export function DownloadWallet({
  t,
  to,
  targetSection,
  text,
  children
}: DownloadWalletProps) {
  const pathDownload = "/docs/wallet/SitFehuWallet Setup 1.0.7.rar"

  const handleDownloadWallet = () => {
    if (to) {
      // Если передан to, просто переходим по ссылке
      window.location.href = to
    } else {
      // Альтернативный надежный метод скачивания
      const link = document.createElement("a")
      link.href = pathDownload
      link.download = pathDownload.split("/").pop() || 'wallet.rar'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="bg-[#F8F8F8] flex flex-col sm:flex-row justify-between items-center px-6 py-5 rounded-2xl my-10 lg:items-center">
      <p className="text-black text-[8vw] sm:text-2xl lg:text-3xl font-bold mb-2 lg:mb-0">
        {text || t('down_text')}
      </p>
      <AccentBtn
        onClick={to ? undefined : handleDownloadWallet}
        icon="/wallet.svg"
        className="flex w-full lg:w-60 gap-2 py-4 lg:py-4 px-4 md:py-4 md:px-6 justify-center text-[5vw] lg:text-[16px] md:text-[18px]"
        to={to}
        targetSection={targetSection}
      >
        {children}
      </AccentBtn>
    </div>
  )
}