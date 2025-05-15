import React from 'react'

const AdBanner = ({ children }) => {
  return (
    <div className="page-layout">
      <main className="main-card">
        {children}
      </main>
      <aside>
        <div className="ad-banner sidebar">Advertisement Space</div>
      </aside>
    </div>
  )
}

export default AdBanner