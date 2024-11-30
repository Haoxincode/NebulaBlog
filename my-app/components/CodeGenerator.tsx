'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Terminal } from 'lucide-react'

export default function CodeGenerator() {
  return (
    <section className="py-32 bg-gray-50 text-[#072a16] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-50" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 space-y-4"
          >
            <div className="flex items-center justify-center mb-4">
              <Terminal className="w-12 h-12 text-[#072a16]" />
            </div>
            <h2 className="text-5xl font-bold text-[#072a16]">
              代码实现
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              借助AI的力量，将设计概念转化为实际可执行的代码。Nebula Tech Design不仅生成
              符合最佳实践的Python代码，还包含详细的中文注释，确保代码的可读性和可维护性。
              从服务初始化到事件处理，为您的汽车项目提供坚实的代码基础。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#072a16] to-[#D4E7A5] rounded-2xl blur-xl opacity-10" />
            <div className="relative bg-[#1e1e1e] rounded-xl shadow-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7N4pqeR2ijlsScCYUoAoiuTKZB5Oer.png"
                alt="Generated Python code example showing service implementations with Chinese comments"
                width={1200}
                height={1000}
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

