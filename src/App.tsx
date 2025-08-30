import React, { useState, useEffect } from 'react';
import { Heart, Users, Star, Sprout, ArrowDown } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 1,
      icon: Heart,
      title: "Who Borned You",
      subtitle: "The Foundation",
      description: "Those who brought you into this world, nurtured your first breath, and laid the foundation of your existence. The eternal gratitude we owe to our creators.",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50"
    },
    {
      id: 2,
      icon: Users,
      title: "Who is Born with You",
      subtitle: "The Companions",
      description: "The souls who walk alongside you through life's journey. Family, friends, and kindred spirits who share your path and understand your story.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      id: 3,
      icon: Star,
      title: "Who is Born for You",
      subtitle: "The Destined",
      description: "The special someone meant to complete your story. Your soulmate, life partner, or that one person who changes everything and makes life meaningful.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50"
    },
    {
      id: 4,
      icon: Sprout,
      title: "Who is Born from You",
      subtitle: "The Legacy",
      description: "The next generation that carries your essence forward. Your children, students, or those whose lives you've shaped and who will continue your story.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50"
    }
  ];

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className={`text-center text-white z-10 px-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            4W of My Life
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A journey through the four essential questions that define our human connections and purpose
          </p>
          <button 
            onClick={() => scrollToSection(0)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
          >
            Begin the Journey
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSection === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Question Sections */}
      {sections.map((section, index) => {
        const Icon = section.icon;
        return (
          <section
            key={section.id}
            id={`section-${index}`}
            className={`min-h-screen flex items-center justify-center py-20 ${section.bgColor} relative overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-5">
              <div className={`w-96 h-96 bg-gradient-to-r ${section.color} rounded-full blur-3xl absolute top-1/4 left-1/4 animate-pulse`}></div>
              <div className={`w-64 h-64 bg-gradient-to-r ${section.color} rounded-full blur-2xl absolute bottom-1/4 right-1/4 animate-pulse delay-1000`}></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center z-10">
              <div className="mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${section.color} text-white mb-6 shadow-2xl transform hover:scale-110 transition-all duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800">
                  {section.title}
                </h2>
                <p className={`text-2xl md:text-3xl font-light bg-gradient-to-r ${section.color} bg-clip-text text-transparent mb-8`}>
                  {section.subtitle}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="flex space-x-4">
                  {sections.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(idx)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        idx === index 
                          ? `bg-gradient-to-r ${section.color} scale-125` 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final Reflection Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="text-center text-white z-10 px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            The Circle of Life
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            These four connections form the complete tapestry of human existence. From those who gave us life, 
            to those who share our journey, to those destined for us, and finally to those who carry us forward. 
            Understanding these relationships helps us appreciate the beautiful interconnectedness of our lives.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-white group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {section.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;