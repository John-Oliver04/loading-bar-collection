import React from 'react'
import '../styles/LoadingStyles.css';


function LoadingPage() {
  return (
    <div>
        <div className='container'>
            <div class="card">
                <h3>Loading Bar 1</h3>
                <p>Green Loading bar</p>
                <div class="loading-bar-container">
                    <div class="loading-bar1"></div>
                </div>
            </div>
            <div class="card">
                <h3>Loading Bar 2</h3>
                <p>Status Loading bar</p>
                <div class="loading-bar-container">
                    <div class="loading-bar2"></div>
                </div>
            </div>
            <div class="card">
                <h3>Loading Bar 3</h3>
                <p>Circle Loading bar</p>
                <div class="spinner-container">
                    <div class="spinner"></div>
                </div>
            </div>
            <div class="card">
                <h3>Loading Bar 4</h3>
                <p>Up Down Loading Dot</p>
                <div class="loading-updown-container">
                    <div class="l1">.</div>
                    <div class="l2">.</div>
                    <div class="l3">.</div>
                    <div class="l4">.</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LoadingPage