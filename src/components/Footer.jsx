import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} VibeSite. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
