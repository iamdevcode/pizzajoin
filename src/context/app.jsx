import { createContext, useContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ chidlren }) => {
  //
  const data = {}
  return <AppContext.Provider value={data}>{chidlren}</AppContext.Provider>
}

const useApp = () => useContext(AppContext)

export { AppProvider, useApp }
