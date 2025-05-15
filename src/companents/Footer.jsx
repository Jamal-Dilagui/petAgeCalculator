import React from 'react'

const Footer = () => {
  return (
    <>
        {/* <!-- Result Modal Popup --> */}
        {/* <div id="resultModal" className="modal-overlay" style="display:none;">
            <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
                <button className="modal-close" id="closeModal" aria-label="Close result popup">&times;</button>
                <div className="results visible" id="results">
                    <div className="human-age" id="humanAge">0</div>
                    <p id="resultText">Your dog is like a 0-year-old human!</p>
                    <div className="share-buttons">
                        <button className="share-button" onClick="share('twitter')">Twitter</button>
                        <button className="share-button" onClick="share('facebook')">Facebook</button>
                    </div>
                    <div className="dog-fact" id="dogFact"></div>
                </div>
            </div>
        </div> */}

        {/* <!-- Mobile Ad Banner --> */}
        <div className="ad-banner mobile">Advertisement Space</div>
        <footer className="footer">For entertainment purposes only</footer>
    </>
  )
}

export default Footer