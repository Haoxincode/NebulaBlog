'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-[#072a16] text-white py-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4E7A5]/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
            animate={{ 
              scale: [1, 1.2, 1],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.8
            }}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${15 + i * 15}%`
            }}
          >
            <Star className="w-6 h-6 text-[#D4E7A5]/30" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-4xl mx-auto px-4 space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="Nebula Tech Design Logo"
              width={120}
              height={120}
              priority
              className="w-auto h-[120px]"
            />
          </motion.div>
          <h1 className="text-7xl font-bold text-white tracking-tight">
            Nebula Tech Design
          </h1>
          <p className="text-3xl text-white/90 font-light">
            大模型驱动的汽车开发工具链
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 text-white/80 leading-relaxed max-w-3xl mx-auto font-light"
        >
          Nebula Tech Design 展示了大型语言模型在汽车开发中的创新应用。通过AI对话，
          实现EEA（电子电气架构）设计的快速迭代，涵盖时序图生成、服务接口定义和代码实现等关键环节。
          体验未来汽车开发的智能化革命，提升设计效率，激发创新潜能。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="https://chat.nebula-tech.design/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[#2d6b22] text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 ease-out hover:bg-[#2d6b22]/90 group"
            >
              <span className="relative z-10">开始AI对话设计</span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-[#2d6b22] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ mixBlendMode: 'overlay' }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

