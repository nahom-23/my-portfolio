import React from 'react';

const MobileHeader: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-sm">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="text-white font-semibold text-lg tracking-wide">Nahom</span>
            </div>

            {/* Hamburger Menu */}
            <button className="text-white p-1 hover:bg-white/10 rounded-sm transition-colors">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <div className="w-full h-0.5 bg-white rounded-full"></div>
                    <div className="w-full h-0.5 bg-white rounded-full"></div>
                </div>
            </button>
        </header>
    );
};

export default MobileHeader; 