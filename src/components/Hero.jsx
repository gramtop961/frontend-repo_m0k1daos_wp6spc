import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_45rem_at_50%_0%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
          <span>AI-powered site builder</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
          Finish your website faster
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Design, build, and launch in minutes. Clean components, modern styles, and a
          delightful experience—all set up for you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#features" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
            Explore Features
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
