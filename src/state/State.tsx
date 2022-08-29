import React, { useEffect, useState, createContext } from 'react'

const StateContext = createContext({
  isMobileMenuOpen: false,
  openMobileMenu: () => {},
  closeMobileMenu: () => {},
})

const StateContextProvider = function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openMobileMenu = () => { setMobileMenuOpen(true) }
  const closeMobileMenu = () => { setMobileMenuOpen(false) }

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMobileMenuOpen)
  }, [isMobileMenuOpen])

  return (
    <StateContext.Provider
      value={{
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateContextProvider }
