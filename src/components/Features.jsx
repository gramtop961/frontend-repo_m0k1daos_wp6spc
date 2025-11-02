import React from 'react';
import { Rocket, Star, Shield } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    description: 'Optimized build tooling and best-in-class performance out of the box.',
    icon: Rocket,
    color: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'Beautiful by Default',
    description: 'Thoughtful typography and modern components that look great everywhere.',
    icon: Star,
    color: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Secure & Reliable',
    description: 'Production-ready patterns with accessibility and security in mind.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What you get</h2>
          <p className="mt-3 text-gray-600">A focused set of tools to help you ship faster with confidence.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} grid place-items-center text-white`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-600 text-sm leading-6">{description}</p>
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-black/0 via-black/5 to-black/10 blur-2xl transition-transform duration-500 group-hover:translate-y-6" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
