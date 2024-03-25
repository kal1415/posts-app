import React, { PropsWithChildren } from 'react'


const Container = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container