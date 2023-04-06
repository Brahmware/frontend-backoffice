import React from 'react';

const LoadingSearchField = () => {
    return (
        <div class="search">
            <div class="icon">
                <span>
                    <svg viewBox="0 0 40 40">
                        <path d="M3,3 L37,37"></path>
                    </svg>
                </span>
            </div>
            <div class="field">
                <input type="text" placeholder="Search for something..." />
            </div>
        </div>
    )
}

export default LoadingSearchField