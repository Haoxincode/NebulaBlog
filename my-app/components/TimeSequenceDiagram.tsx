'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function TimeSequenceDiagram() {
  return (
    <section className="py-32 bg-gray-50 text-[#072a16]">
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
            <h2 className="text-5xl font-bold text-[#072a16]">
              时序图生成
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              通过AI驱动的时序图生成，轻松可视化复杂的系统交互。从用户输入到数据库查询，
              全流程清晰呈现，助力开发团队快速理解和优化系统架构。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zenuml%20(3)-7hvC30UsTN6GOfhsvz6udcVQN1P8mM.png"
                alt="Sequence Diagram showing the process flow between User, Frontend, Backend, and Database"
                width={1200}
                height={800}
                className="w-full rounded-xl"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#072a16] text-white p-4 rounded-lg shadow-xl"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

