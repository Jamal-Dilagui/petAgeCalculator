import React from 'react'

const Header = () => {
  return (
     // Header with Logo and Info
     <header className="site-header">
        <div className="header-logo">
        {/* Placeholder SVG logo */}
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="22" fill="#4F46E5"/>
            <ellipse cx="22" cy="28" rx="10" ry="7" fill="#fff"/>
            <ellipse cx="15" cy="18" rx="3" ry="3" fill="#fff"/>
            <ellipse cx="29" cy="18" rx="3" ry="3" fill="#fff"/>
            <ellipse cx="22" cy="32" rx="2" ry="1.2" fill="#4F46E5"/>
        </svg>
        <span className="logo-text">DogAge</span>
        </div>
        <div className="header-info">
        <span className="header-title">Vet-Approved Dog Age Calculator</span>
        <span className="header-tagline">Find your dog's real age in human years</span>
        </div>
    </header>
    // Top Ad Banner
  )
}

export default Header