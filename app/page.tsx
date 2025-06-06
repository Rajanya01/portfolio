"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { X, Menu, Code, Layers, Server, Gamepad2, Zap, Terminal, ArrowRight, ExternalLink, Github, Sparkles, Calendar, BookOpen, Monitor, Database, Smartphone, Trophy, Users, Star, Linkedin, Mail, Fullscreen, MessageSquareText } from "lucide-react";
import { code } from "framer-motion/client";

// Animated Background Component - Reduced Particles
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      {/* Animated gradient waves - GREEN ONLY */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #22c55e 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, #22c55e 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Digital circuit lines */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="opacity-5">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            <motion.path
              d="M20 20 L80 20 L80 80 L20 80 Z"
              fill="none"
              stroke="#22c55e"
              strokeWidth="1"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              strokeDasharray="5,5"
            />
            <motion.path
              d="M0 50 L100 50 M50 0 L50 100"
              fill="none"
              stroke="#22c55e"
              strokeWidth="1"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              strokeDasharray="10,10"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Reduced floating particles (20 instead of 40) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-400"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}

// Digital Rain Effect Component - Reduced Density
function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    // Reduced to 20% of canvas width for sparser effect
    const columns = Math.floor((canvas.width / fontSize) * 0.2)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height)
    }

    // Reduced character set to "01" only
    const characters = "01"

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#22c55e"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-8" />
}

// Enhanced Section Divider Component - More Visible with Shadow
function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-12">
      <motion.div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 0.8 }}
      />
      <div className="flex items-center space-x-4 relative z-10">
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-transparent to-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="w-3 h-3 bg-green-400 rounded-full relative shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.7)",
              "0 0 0 10px rgba(34, 197, 94, 0)",
              "0 0 0 0 rgba(34, 197, 94, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-r from-green-400 to-green-600 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.div
          className="w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0.7)",
              "0 0 0 10px rgba(34, 197, 94, 0)",
              "0 0 0 0 rgba(34, 197, 94, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
        <motion.div
          className="w-24 h-1.5 bg-gradient-to-l from-transparent to-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </div>
  )
}

// Enhanced Glassmorphism Card Component - Added Shadow
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  neonBorder?: boolean
}

function Card({ children, className = "", hover = true, neonBorder = false }: CardProps) {
  const baseClasses = "bg-black/30 backdrop-blur-xl border rounded-2xl relative overflow-hidden group shadow-[0_4px_20px_rgba(34,197,94,0.2)]"
  const borderClasses = neonBorder
    ? "border-green-400/40 hover:border-green-400/80"
    : "border-gray-800/30 hover:border-green-400/40"
  const hoverClasses = hover
    ? "hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:bg-black/40 transition-all duration-700 hover:scale-[1.02]"
    : ""

  return (
    <motion.div
      className={`${baseClasses} ${borderClasses} ${hoverClasses} ${className}`}
      whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated glowing edge effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-green-400/5 to-green-400/5 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-green-400/30 group-hover:border-green-400/60 transition-colors duration-300" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

// Custom Button Component
interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline" | "neon"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group shadow-[0_4px_20px_rgba(34,197,94,0.2)]"

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white shadow-lg hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] transform hover:scale-105 hover:rotate-1",
    secondary:
      "bg-gray-800/30 hover:bg-gray-700/50 text-white border border-gray-700/50 hover:border-green-400/50 backdrop-blur-sm hover:backdrop-blur-md",
    outline:
      "border-2 border-green-400/50 text-green-400 hover:bg-green-400 hover:text-black bg-transparent hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-105",
    neon: "bg-transparent border-2 border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-105",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-400/20 opacity-0 group-hover:opacity-100"
        initial={false}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} onClick={onClick} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
      {content}
    </motion.button>
  )
}

// Tech Skill Node Component
function TechSkillNode({
  skill,
  icon: Icon,
  x,
  y,
  delay,
}: {
  skill: string
  icon: React.ElementType
  x: number
  y: number
  delay: number
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.2, y: -5 }}>
        <motion.div
          className="w-16 h-16 rounded-full bg-black/50 border border-green-400/50 flex items-center justify-center backdrop-blur-md shadow-[0_4px_20px_rgba(34,197,94,0.2)]"
          animate={{
            boxShadow: [
              "0 0 0px rgba(34, 197, 94, 0.3)",
              "0 0 20px rgba(34, 197, 94, 0.6)",
              "0 0 0px rgba(34, 197, 94, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay }}
        >
          <Icon className="h-8 w-8 text-green-400" />
        </motion.div>
        <div className="mt-2 text-center">
          <span className="text-sm font-medium text-white font-orbitron tracking-wider">{skill}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Skill Connection Lines
function SkillConnections() {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      {/* Horizontal lines */}
      <motion.line
        x1="20%"
        y1="30%"
        x2="80%"
        y2="30%"
        stroke="#22c55e"
        strokeWidth="1"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <motion.line
        x1="20%"
        y1="50%"
        x2="80%"
        y2="50%"
        stroke="#22c55e"
        strokeWidth="1"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.line
        x1="20%"
        y1="70%"
        x2="80%"
        y2="70%"
        stroke="#22c55e"
        strokeWidth="1"
        strokeDasharray="5,5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Vertical connections */}
      {[20, 35, 50, 65, 80].map((x, i) => (
        <motion.line
          key={i}
          x1={`${x}%`}
          y1="30%"
          x2={`${x}%`}
          y2="70%"
          stroke="#22c55e"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.2 * i }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  )
}

// Preloader Component
function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="text-4xl font-bold font-orbitron bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          RAJANYA ROY
        </motion.div>
        <motion.div
          className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-gray-400 mt-4 font-inter tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          INITIALIZING PORTFOLIO...
        </motion.p>
        <motion.div className="w-48 h-1 bg-gray-800 mx-auto mt-4 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        </motion.div>
        <motion.div
          className="mt-2 text-xs text-green-400 font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          LOADING SYSTEM...
        </motion.div>
      </div>
    </motion.div>
  )
}

// Mobile Menu Component
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
          <motion.div
            className="absolute right-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-l border-green-400/30"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-green-400 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="mt-12 space-y-6">
                {["About", "Skills", "Projects", "Achievements", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-medium text-gray-300 hover:text-green-400 transition-colors font-orbitron tracking-wider"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={onClose}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Typewriter Effect Component
function TypewriterText({ texts, className }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <div className={className}>
      {currentText}
      <motion.span
        className="text-green-400"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
      >
        |
      </motion.span>
    </div>
  )
}

// Animated Counter Component
function AnimatedCounter({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Card className="text-center p-6" neonBorder>
      <motion.div
        ref={ref}
        className="text-3xl font-bold font-orbitron text-green-400"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {value}
      </motion.div>
      <div className="text-gray-400 font-orbitron tracking-wider">{label}</div>
    </Card>
  )
}

// Animated Passion Card
function PassionCard({
  icon: Icon,
  name,
  desc,
  index,
  noRotate = false,
}: { icon: React.ElementType; name: string; desc: string; index: number; noRotate?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: 10 }}
    >
      <Card className="flex items-center space-x-4 p-6 group">
        <div className="relative">
          {/* Only animate icon if noRotate is false */}
          {noRotate ? (
            <Icon className="h-8 w-8 text-green-400 transition-all duration-300" />
          ) : (
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="h-8 w-8 text-green-400 transition-all duration-300" />
            </motion.div>
          )}
          <div className="absolute inset-0 rounded-full bg-green-400/20" />
        </div>
        <div>
          <div className="font-semibold text-white font-orbitron tracking-wider">{name}</div>
          <div className="text-gray-400 text-sm">{desc}</div>
        </div>
        <motion.div
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Sparkles className="h-5 w-5 text-green-400" />
        </motion.div>
      </Card>
    </motion.div>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full overflow-hidden" neonBorder>
        <div className="relative overflow-hidden flex flex-col items-center">
          <div
            style={
              (project.title === "EduNova" || project.title === "Portfolio")
                ? { width: "100%", height: "100%", minHeight: 200 }
                : { width: project.imageWidth || 300, height: project.imageHeight || 200, minHeight: 200 }
            }
            className="flex items-center justify-center mb-4 rounded-xl"
          >
            <motion.img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className={(project.title === "EduNova" || project.title === "Portfolio") ? "object-cover w-full h-full" : "object-contain max-w-full max-h-full"}
              style={(project.title === "EduNova" || project.title === "Portfolio") ? { width: "100%", height: "100%" } : { maxWidth: '100%', maxHeight: '100%' }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="p-6 w-full">
            <motion.h3
              className="text-xl font-bold font-orbitron text-white mb-3 group-hover:text-green-400 transition-colors tracking-wider"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech && project.tech.map((tech: string) => (
                <span key={tech} className="px-2 py-1 bg-green-400/10 border border-green-400/30 text-green-400 rounded text-xs font-mono">{tech}</span>
              ))}
            </div>
            {project.link && (
              <Button
                href={project.link}
                target={project.link.startsWith('http') ? "_blank" : undefined}
                rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
                variant="neon"
                className="">
                Open {project.link.startsWith('http') ? 'Site' : ''}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

// Achievement Card Component
function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full text-center group p-6" neonBorder>
        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
          }}
        >
          <achievement.icon className="h-12 w-12 text-green-400 mx-auto mb-4 transition-colors" />
        </motion.div>
        <h3 className="text-lg font-bold font-orbitron text-white mb-2 tracking-wider">{achievement.title}</h3>
        <p className="text-gray-400 mb-2">{achievement.description}</p>
        <div className="flex items-center justify-center text-sm text-green-400 font-orbitron tracking-wider">
          <Calendar className="h-4 w-4 mr-1" />
          {achievement.year}
        </div>
      </Card>
    </motion.div>
  )
}

// Contact Link Component
function ContactLink({ contact, index }: { contact: any; index: number }) {
  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
      className="group"
    >
      <Card className="flex flex-col items-center justify-center space-y-2 p-6 hover:border-green-400/60" neonBorder>
        <div className="flex items-center justify-center">
          <contact.icon className="h-8 w-8 text-green-400 transition-colors" />
        </div>
        <span className="text-lg font-medium font-orbitron tracking-wider text-center">{contact.label}</span>
      </Card>
    </motion.a>
  )
}

type Skill = {
  name: string;
  className?: string;
};

type SkillCardProps = {
  skill: Skill;
  delay?: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay = 0 }) => {
  // Special handling for React's spin animation
  const isReact = skill.name === 'React';

  // Determine skill category for hover effects
  const getSkillEffect = (name: string) => {
    const lowerName = name.toLowerCase();

    if (['react', 'next', 'svelte', 'vue', 'angular'].some(tech => lowerName.includes(tech))) {
      return 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(0,216,255,0.6)] transition-all duration-300 hover:rotate-3';
    }

    if (['node', 'express', 'nest', 'django', 'flask', 'spring'].some(tech => lowerName.includes(tech))) {
      return 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.6)] transition-all duration-300 hover:-rotate-3';
    }

    if (['python', 'javascript', 'typescript', 'java', 'c++', 'c#'].some(tech => lowerName.includes(tech))) {
      return 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,165,0,0.6)] transition-all duration-300 hover:translate-y-[-5px]';
    }

    if (['mongo', 'postgres', 'mysql', 'sql', 'firebase'].some(tech => lowerName.includes(tech))) {
      return 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,0,0.6)] transition-all duration-300 hover:skew-y-3';
    }

    if (['git', 'docker', 'aws', 'azure', 'github', 'gitlab'].some(tech => lowerName.includes(tech))) {
      return 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(100,149,237,0.6)] transition-all duration-300 hover:skew-x-3';
    }

    // Default effect
    return 'hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(138,43,226,0.6)] transition-all duration-300';
  };

  const baseClass = 'w-16 h-16 object-contain';
  const effectClass = getSkillEffect(skill.name);
  const imgClass = `${baseClass} ${effectClass} ${skill.className || ''} ${isReact ? 'animate-spin-slow' : ''}`;

  return (
    <motion.div
      className="flex flex-col items-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <img
          src={getSkillImage(skill.name)}
          alt={skill.name}
          className={imgClass}
          style={isReact ? { animationDuration: '8s', animationTimingFunction: 'linear' } : {}}
        />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-400 font-mono whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

// Utility function to get skill image src by name
function getSkillImage(name: string): string {
  const images: Record<string, string> = {
    // Example: 'JavaScript': '/images/javascript.png',
    // Add all your skill name to image src mappings here
    'JavaScript': 'https://i.postimg.cc/GtT6C9sv/pngwing-com-3.png',
    'TypeScript': 'https://i.postimg.cc/6qDrkpd2/typescript.png',
    'HTML': 'https://i.postimg.cc/nc32VnpW/pngegg-2.png',
    'CSS': 'https://i.postimg.cc/NM8VpZmw/pngegg-3.png',
    'C#': 'https://i.postimg.cc/Xv4z14c7/pngwing-com-4.png',
    'C': 'https://i.postimg.cc/xdScMVTy/icons8-c-programming-480.png',
    'React': 'https://i.postimg.cc/90gv7Svt/pngwing-com-5.png',
    'Next.js': 'https://i.postimg.cc/qvJM3m1t/next-js-1024x617.png',
    'Tailwind': 'https://i.postimg.cc/7YDw7Gff/Tailwind-CSS.png',
    'Unity': 'https://i.postimg.cc/brrMHPcV/pngwing-com-6.png',
    'Vite': 'https://i.postimg.cc/JzYQZX48/Vite-js.png',
    'Blender': 'https://i.postimg.cc/Gp2TPggg/pngegg-4.png',
    'Figma': 'https://i.postimg.cc/2SqVVL1g/Icon.png',
    'VS Code': 'https://i.postimg.cc/KYWX44gp/pngwing-com-7.png',
    'Cursor': 'https://i.postimg.cc/nhKJj2Gs/cursor.png',
    'Vercel': 'https://i.postimg.cc/vmsbmkRx/pngwing-com-9.png',
    // ...add up to 15 or more as needed
  };
  return images[name] || '';
}

type CategorySectionProps = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  startDelay?: number;
};

const CategorySection: React.FC<CategorySectionProps> = ({ title, icon: Icon, skills, startDelay = 0 }) => {
  const isTools = title === "TOOLS";
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <Icon className="h-7 w-7 text-green-400" />
        <h3 className="text-2xl font-bold font-orbitron tracking-wider text-green-400 ">{title}</h3>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ${isTools ? 'justify-center place-items-center' : ''} ${title === 'LANGUAGES' ? 'grid-cols-3 md:grid-cols-5 lg:grid-cols-6' : ''}`}>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            delay={startDelay + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  // State and hooks
  const [loading, setLoading] = React.useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Skills data
  const languages = [
    { name: "JavaScript", className: "w-20 h-20" },
    { name: "TypeScript", className: "w-16 h-16" },
    { name: "HTML", className: "w-18 h-18" },
    { name: "CSS", className: "w-20 h-20" },
    { name: "C#" },
    { name: "C" },
  ];
  const frameworks = [
    { name: "React", className: "w-16 h-16 animate-spin" },
    { name: "Next.js", className: "w-24 h-16 invert" },
    { name: "Tailwind", className: "w-20 h-20" },
    { name: "Unity", className: "w-32 h-28 invert" },
    { name: "Vite" },
  ];
  const tools = [
    { name: "Blender" },
    { name: "Figma" },
    { name: "VS Code" },
    { name: "Cursor" },
    { name: "Vercel", className: "w-28 h-28 invert" },
  ];

  const { scrollYProgress } = useScroll()

  return (
    <>

      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <div className="min-h-screen bg-black text-white overflow-x-hidden font-inter">
        <AnimatedBackground />
        <DigitalRain />

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        {/* Navigation */}
        <motion.nav
          className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-black/20 backdrop-blur-xl border border-green-400/30 rounded-2xl px-6 py-4 relative overflow-hidden shadow-[0_4px_20px_rgba(34,197,94,0.2)]">
            <motion.div
              className="absolute left-0 right-0 bottom-0 h-1 bg-green-400 z-50 rounded-b-xl"
              style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />
            <div className="flex justify-between items-center relative z-10">
              <motion.div
                className="flex flex-col"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="text-xl font-bold font-orbitron bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-wider">
                  RAJANYA ROY
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-widest">DEVELOPER & CREATOR</div>
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {["About", "Skills", "Projects", "Achievements", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative group text-gray-300 hover:text-green-400 transition-colors duration-300 font-orbitron tracking-wider text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-green-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.a>
                ))}
              </div>
              <motion.button
                className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="container mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 p-1 relative">
                  <motion.div
                    className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden shadow-[0_4px_20px_rgba(34,197,94,0.2)]"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(34, 197, 94, 0.3)",
                        "0 0 40px rgba(34, 197, 94, 0.6)",
                        "0 0 20px rgba(34, 197, 94, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <img 
                      src="https://i.postimg.cc/mZKt9VmY/bubi-profile.png" 
                      alt="Profile Picture" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute border border-green-400/20 rounded-full"
                      style={{ inset: `${i * 8}px` }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 10 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold font-orbitron mb-4 tracking-wider"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  RAJANYA ROY
                </motion.span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <TypewriterText
                  texts={["Game Developer", "Web Developer", "Creative Coder", "Tech Enthusiast"]}
                  className="text-2xl md:text-4xl text-gray-300 font-medium font-poppins"
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-lg text-green-400 font-medium tracking-wide font-orbitron"
                >
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    BUILDING THE FUTURE, ONE LINE OF CODE AT A TIME
                  </motion.span>
                </motion.p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8"
              >
                Passionate full-stack developer crafting interactive experiences from dynamic websites to immersive
                games. Driven by creativity, innovation, and cutting-edge technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="w-full"
              >
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-2xl mx-auto px-4">
                  <Button
                    href="#projects"
                    size="lg"
                    className="group w-full sm:w-auto px-6 py-3 text-center justify-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="whitespace-nowrap">View Projects</span>
                      <motion.span
                        className="flex items-center h-5"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.span>
                    </div>
                  </Button>
                  <Button
                    href="#contact"
                    variant="neon"
                    size="lg"
                    className="group w-full sm:w-auto px-6 py-3 text-center justify-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="whitespace-nowrap">Get In Touch</span>
                      <motion.span
                        className="flex items-center h-5"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      >
                        <MessageSquareText className="h-5 w-5" />
                      </motion.span>
                    </div>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SectionDivider />

        {/* About Section */}
        <section id="about" className="py-20 px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-wider"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                ABOUT ME
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  whileInView={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  I’m a developer with a strong passion for building — from clean, responsive websites to interactive, game-like experiences that feel alive.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  whileInView={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  My work blends design, logic, and motion. I love turning ideas into intuitive interfaces, exploring new frameworks, and pushing boundaries through solo projects and hackathons. Every line of code is a chance to learn, improve, and create something impactful.
                </motion.p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <AnimatedCounter value="13" label="YEARS OLD" delay={0.1} />
                  <AnimatedCounter value="2+" label="YEARS CODING" delay={0.3} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold font-orbitron text-green-400 mb-4 tracking-wider">MY PASSIONS</h3>
                <div className="space-y-4">
                  {[
                    { icon: Gamepad2, name: "Game Making", desc: "Creating immersive experiences" },
                    { icon: Code, name: "Web Development", desc: "Building dynamic applications" },
                    { icon: BookOpen, name: "UI/UX Designer", desc: "Crafting compelling narratives" },
                  ].map((passion, index) => (
                    <motion.div
                      key={passion.name}
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-black/30 backdrop-blur-xl border border-green-400/40 rounded-2xl p-6 flex items-center space-x-4 transition-all duration-300">
                        <passion.icon className="h-8 w-8 text-green-400 flex-shrink-0" />
                        <div className="flex flex-col">
                          <div className="font-semibold text-white font-orbitron tracking-wider text-lg">{passion.name}</div>
                          <div className="text-gray-400 text-sm">{passion.desc}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 relative z-10 overflow-hidden min-h-screen">
          {/* Animated Background - copied from Hero/About */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            {/* Floating gradient circles */}
            <motion.div
              className="absolute rounded-full w-64 h-64 blur-xl opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(34,197,94,0) 70%)",
                top: "20%",
                left: "10%"
              }}
              animate={{
                y: [0, 40, 0],
                x: [0, 20, 0],
                transition: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            <motion.div
              className="absolute rounded-full w-80 h-80 blur-xl opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(34,197,94,0) 70%)",
                bottom: "15%",
                right: "15%"
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, -20, 0],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }}
            />
            {/* Additional floating elements */}
            <motion.div
              className="absolute rounded-full w-32 h-32 blur-lg opacity-10"
              style={{
                background: "radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(34,197,94,0) 70%)",
                top: "60%",
                left: "70%"
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 15, 0],
                transition: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }
              }}
            />
            {/* Animated grid overlay */}
            <motion.div
              className="absolute inset-0 w-full h-full opacity-10"
              style={{ background: "repeating-linear-gradient(90deg, #22d3ee11 0 1px, transparent 1px 40px), repeating-linear-gradient(180deg, #22d3ee11 0 1px, transparent 1px 40px)" }}
              animate={{ backgroundPositionX: ["0px", "40px", "0px"], backgroundPositionY: ["0px", "40px", "0px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Digital circuit lines */}
            <SkillConnections />
          </div>

          <div className="container mx-auto relative z-10 max-w-6xl">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-wider"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  backgroundSize: ["200% 200%", "200% 200%", "200% 200%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                SKILLS & TECH
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.p
                className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A comprehensive toolkit of modern technologies and frameworks
              </motion.p>
            </motion.div>

            {/* Categories */}
            <CategorySection
              title="LANGUAGES"
              icon={Code}
              skills={languages}
              startDelay={0.2}
            />

            <CategorySection
              title="FRAMEWORKS"
              icon={Layers}
              skills={frameworks}
              startDelay={0.4}
            />

            <CategorySection
              title="TOOLS"
              icon={Terminal}
              skills={tools}
              startDelay={0.6}
            />
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
        </section>

        <SectionDivider />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-wider"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                FEATURED PROJECTS
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Portfolio",
                  description:
                    "A dynamic portfolio showcasing my projects, skills, and achievements.",
                  tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                  image: "https://i.postimg.cc/rF5Kyxbs/Screenshot-2025-06-06-002831.png  ",
                  status: "Completed",
                  imageWidth: Fullscreen,
                  imageHeight: Fullscreen,
                },
                {
                  title: "Horror Game",
                  description:
                    "A horror game project featuring immersive environments, interactive gameplay.",
                  tech: ["Unity", "C#", "Blender"],
                  image: "https://i.postimg.cc/x1ySPpGS/62e132087fe3599fdd46ecb5.png",
                  status: "In Development",
                  imageWidth: 350,
                  imageHeight: 180,
                  link: "/comingSoon",
                },
                {
                  title: "EduNova",
                  description:
                    "An educational platform for interactive learning experiences, quizzes, and resources.",
                  tech: ["React", "Next.js", "TypeScript", "MongoDB"],
                  image: "https://i.postimg.cc/nL7ytg8C/Screenshot-2025-06-05-213357.png",
                  status: "Planning",
                  imageWidth: Fullscreen,
                  imageHeight: Fullscreen,
                  link: "https://edunova1.vercel.app",
                },
              ].map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-wider"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                ACHIEVEMENTS
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Trophy,
                  title: "Hackathon Participant",
                  description: "Hello World Hacks",
                  year: "2024",
                },
                {
                  icon: Code,
                  title: "First Website",
                  description: "Built my first website",
                  year: "2024",
                },
                {
                  icon: Users,
                  title: "GitHub Contributions",
                  description: "Active open source contributor",
                  year: "2024",
                },
                {
                  icon: Star,
                  title: "Learning Journey",
                  description: "Mastered 7+ languages",
                  year: "2022-2025",
                },
              ].map((achievement, index) => (
                <AchievementCard key={achievement.title} achievement={achievement} index={index} />
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent tracking-wider"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                LET'S CONNECT
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Ready to collaborate on something amazing? Let's build the future together!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Rajanya01", color: "green" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/rajanya-roy-7bb494358/",
                  color: "purple",
                },
                { icon: Mail, label: "Email", href: "mailto:rajanyar910@gmail.com", color: "blue", },
              ].map((contact, index) => (
                <ContactLink key={contact.label} contact={contact} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-green-400/30 relative z-10">
          <div className="container mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 font-orbitron tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              © 2025 RAJANYA ROY. CRAFTED WITH PASSION AND CODE.
            </motion.p>
          </div>
        </footer>
      </div>
    </>
  )
}
