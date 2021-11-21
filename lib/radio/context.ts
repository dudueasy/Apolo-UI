import React from "react";

export type RadioGroupContextType = {
  value: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const radioGroupContext = React.createContext<RadioGroupContextType | null>(null)
export const RadioGroupContextProvider = radioGroupContext.Provider

export default radioGroupContext
