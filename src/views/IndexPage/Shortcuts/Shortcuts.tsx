import { Section } from '@/components/layout'
import { Image } from '@/components/kit'

function Shortcuts() {
  return (
    <Section className="flex flex-col items-center justify-center">
      <div className="mb-1 ml-[2em] text-center text-[12px] leading-[12px] tracking-[2em] text-[#00FF60]">SOON</div>
      <h2 className="mb-3 text-center text-4xl font-semibold leading-[44px] lg:mb-6 lg:text-5xl lg:leading-[56px]">Shortcuts</h2>
      <p className="mb-10 px-5 text-center text-2xl tracking-[-0.02em] text-white/40 lg:mb-16 lg:text-[32px] lg:leading-[40px]">Use the interface without a&nbsp;mouse from start to finish</p>
      <Image className="hidden lg:block" src="/images/shortcuts/shortcuts-desktop.svg" alt="Shortcuts" width="580" height="140" />
      <Image className="lg:hidden" src="/images/shortcuts/shortcuts-mobile.svg" alt="Shortcuts" width="335" height="81" />
    </Section>
  )
}

export { Shortcuts }
