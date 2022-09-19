function Footer() {
  return (
    <div className="mt-9 px-6 py-10 text-white/25 lg:mt-[195px] lg:px-[60px]">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center gap-2.5 lg:flex-row lg:gap-8">
          <img src="images/logo-footer.svg" alt="Via" width="74" height="16" />
          <div>
            Cross&#8209;chain aggregation protocol, 2022
          </div>
        </div>
        <div>Socials...</div>
      </div>
      <div className="mt-[44px] hidden lg:block">
        <a className="inline-block hover:brightness-125" href="https://www.producthunt.com/products/via-protocol" target="_blank" rel="noopener noreferrer">
          <img src="images/producthunt.png" alt="PRODUCT HUNT #1 Product of the Day" width="250" height="54" />
        </a>
      </div>
    </div>
  )
}

export { Footer }
