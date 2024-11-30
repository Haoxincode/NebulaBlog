'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-32 pb-64 bg-white text-[#072a16]">
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
              <Users className="w-12 h-12 text-[#072a16]" />
            </div>
            <h2 className="text-5xl font-bold text-[#072a16]">
              加入我们的社区
            </h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              加入我们的微信群，与其他汽车技术专家和AI爱好者交流。分享见解，探讨最新趋势，
              共同推动AI在汽车行业的创新应用。您也可以添加个人微信进行深入交流！
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group h-[300px]"
            >
              <Image
                src="/groupWechat.jpg"
                alt="WeChat Group QR Code"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group h-[300px]"
            >
              <div className="relative text-center">
                <Image
                  src="/chengqian.jpeg"
                  alt="Personal WeChat QR Code"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold mt-4 text-[#072a16]">个人微信：ChengQ</h3>
                <p className="text-sm text-black/60">扫码添加好友</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

