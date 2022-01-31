import React, { createContext } from 'react'
export const FeedContext = createContext(null)

export const CombineProviders = ({ feedContent, children }) => (
  <FeedContext.Provider value={feedContent}>{children}</FeedContext.Provider>
)
