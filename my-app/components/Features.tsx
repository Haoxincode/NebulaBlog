'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Code2, Terminal, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const features = [
  {
    title: "时序图生成",
    description: "通过AI驱动的时序图生成，轻松可视化复杂的系统交互。从用户输入到数据库查询，全流程清晰呈现，助力开发团队快速理解和优化系统架构。",
    image: "/zenuml.png",
    Icon: ArrowRight,
    imageClass: "rounded-xl",
    objectPosition: "center",
    withBackground: true,
    imageStyle: "object-contain" // Changed to object-contain for sequence diagram
  },
  {
    title: "服务接口生成",
    description: "利用AI技术，自动生成符合最佳实践的服务接口。从天气检测到窗口控制，Nebula Tech Design为您的汽车系统提供清晰、一致且易于集成的接口定义，加速开发流程，提高代码质量。",
    image: "/service.png",
    Icon: Code2,
    imageClass: "rounded-xl",
    objectPosition: "center",
    withBackground: true,
    imageStyle: "object-contain"
  },
  {
    title: "代码实现",
    description: "借助AI的力量，将设计概念转化为实际可执行的代码。Nebula Tech Design不仅生成符合最佳实践的Python代码，还包含详细的中文注释，确保代码的可读性和可维护性。从服务初始化到事件处理，为您的汽车项目提供坚实的代码基础。",
    image: "/code.png",
    Icon: Terminal,
    imageClass: "rounded-lg",
    objectPosition: "top",
    withBackground: false,
    imageStyle: "object-cover" // Keep object-cover for code implementation
  }
]

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % features.length)
    }, 5000)
  }

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    if (!isPaused) {
      startTimer()
    }
    return () => stopTimer()
  }, [isPaused])

  const currentFeature = features[currentIndex]
  const IconComponent = currentFeature.Icon

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + features.length) % features.length)
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % features.length)
  }

  return (
    <section className="py-32 bg-gray-50 text-[#072a16] overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-7xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#072a16]/10 shadow-lg hover:bg-white transition-all duration-200 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#072a16] group-hover:scale-110 transition-transform duration-200" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#072a16]/10 shadow-lg hover:bg-white transition-all duration-200 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#072a16] group-hover:scale-110 transition-transform duration-200" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 space-y-4"
            >
              <div className="flex items-center justify-center mb-4">
                <IconComponent className="w-12 h-12 text-[#072a16]" />
              </div>
              <h2 className="text-5xl font-bold text-[#072a16]">
                {currentFeature.title}
              </h2>
              <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
                {currentFeature.description}
              </p>
            </motion.div>

            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#072a16] to-[#D4E7A5] rounded-2xl blur opacity-20" />
              <div className={`relative ${currentFeature.withBackground ? (currentIndex === 2 ? 'bg-[#1e1e1e]' : 'bg-white') : ''} rounded-xl shadow-2xl ${currentFeature.withBackground ? 'p-8' : 'p-0'}`}>
                {currentIndex === 2 && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                )}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-transparent flex items-center justify-center">
                  <Image
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    fill
                    className={`${currentFeature.imageClass} ${currentFeature.imageStyle} transition-transform duration-300 hover:scale-105`}
                    style={{ objectPosition: currentFeature.objectPosition }}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#072a16] w-8' : 'bg-[#072a16]/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

