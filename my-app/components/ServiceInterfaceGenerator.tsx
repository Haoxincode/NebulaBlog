'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2 } from 'lucide-react'

export default function ServiceInterfaceGenerator() {
  return (
    <section className="py-32 bg-white text-[#072a16]">
      <div className="container mx-auto px-4">
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
              <Code2 className="w-12 h-12 text-[#072a16]" />
            </div>
            <h2 className="text-5xl font-bold text-[#072a16]">
              服务接口生成
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              利用AI技术，自动生成符合最佳实践的服务接口。从天气检测到窗口控制，
              Nebula Tech Design为您的汽车系统提供清晰、一致且易于集成的接口定义，
              加速开发流程，提高代码质量。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#072a16] to-[#D4E7A5] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8EBNu5o711sk43qAxKnZm2O1Zi5jnK.png"
                alt="Service Interface Example showing WeatherDetectionService and WindowControlService"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

