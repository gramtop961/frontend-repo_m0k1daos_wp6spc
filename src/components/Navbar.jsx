import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">VibeSite</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-gray-900">Log in</button>
          <button className="px-4 py-2 text-sm font-semibold rounded-md text-white bg-gray-900 hover:bg-gray-800 shadow-sm">Get Started</button>
        </div>
      </nav>
    </header>
  );
}
