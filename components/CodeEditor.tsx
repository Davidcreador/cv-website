"use client"

import { motion } from "framer-motion"
import { 
  FileCode2, 
  Search, 
  GitBranch, 
  Settings, 
  FolderTree,
  Box,
  X,
  Minus,
  Square
} from "lucide-react"
import { useState, useEffect } from "react"

interface CodeEditorProps {
  fileName?: string
  code?: string
  showMinimap?: boolean
  animated?: boolean
}

const defaultCode = `import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Sparkles, Palette } from 'lucide-react'

interface DeveloperProfile {
  name: string
  role: string
  experience: number
  skills: string[]
  passion: string
  location: string
}

const HelmutPastor: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [currentRole, setCurrentRole] = useState<string>('Software Engineer')
  
  const profile: DeveloperProfile = {
    name: 'Helmut Pastor',
    role: currentRole,
    experience: 8,
    skills: ['TypeScript', 'React', 'Node.js', 'Python', 'AWS'],
    passion: 'Building beautiful, scalable applications',
    location: 'Remote'
  }

  useEffect(() => {
    const roles = ['Software Engineer', 'Full Stack Developer', 'UI/UX Enthusiast']
    const interval = setInterval(() => {
      setCurrentRole(prev => {
        const currentIndex = roles.indexOf(prev)
        return roles[(currentIndex + 1) % roles.length]
      })
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const handleConnect = async (): Promise<void> => {
    try {
      await sendConnectionRequest(profile)
      console.log('✨ Connection established!')
    } catch (error) {
      console.error('Failed to connect:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="developer-profile"
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentRole}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          {profile.name} • {profile.role}
        </motion.h1>
      </AnimatePresence>
      
      <div className="skills-grid">
        {profile.skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="skill-badge"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      
      <button onClick={handleConnect}>
        Let's Build Something Amazing
      </button>
    </motion.div>
  )
}

export default HelmutPastor`

export default function CodeEditor({
  fileName = "HelmutPastor.tsx",
  code = defaultCode,
  showMinimap = true,
  animated = true
}: CodeEditorProps) {
  const [displayedCode, setDisplayedCode] = useState(animated ? "" : code)
  const [currentLine, setCurrentLine] = useState(1)
  const [showCursor, setShowCursor] = useState(true)
  
  const lines = code.split('\n')
  
  useEffect(() => {
    if (!animated) return
    
    let currentIndex = 0
    const codeArray = code.split('')
    
    const typingInterval = setInterval(() => {
      if (currentIndex < codeArray.length) {
        setDisplayedCode(code.substring(0, currentIndex + 1))
        currentIndex++
        
        // Update current line based on newlines
        const newlines = code.substring(0, currentIndex).split('\n').length
        setCurrentLine(newlines)
      } else {
        clearInterval(typingInterval)
      }
    }, 10)
    
    return () => clearInterval(typingInterval)
  }, [code, animated])
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    
    return () => clearInterval(cursorInterval)
  }, [])
  
  const highlightSyntax = (line: string) => {
    // Keywords
    line = line.replace(
      /\b(import|from|export|default|const|let|var|function|return|if|else|try|catch|async|await|interface|type|class|extends|new|typeof|instanceof|void|null|undefined|true|false)\b/g,
      '<span style="color: #C586C0">$1</span>'
    )
    
    // Strings
    line = line.replace(
      /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      '<span style="color: #CE9178">$&</span>'
    )
    
    // Numbers
    line = line.replace(
      /\b(\d+)\b/g,
      '<span style="color: #B5CEA8">$1</span>'
    )
    
    // Functions and methods
    line = line.replace(
      /\b([a-zA-Z_]\w*)\s*(?=\()/g,
      '<span style="color: #DCDCAA">$1</span>'
    )
    
    // Comments
    line = line.replace(
      /(\/\/.*$|\/\*.*?\*\/)/g,
      '<span style="color: #6A9955; font-style: italic">$1</span>'
    )
    
    // Types
    line = line.replace(
      /:\s*([A-Z]\w*(?:<[^>]+>)?)/g,
      ': <span style="color: #4EC9B0">$1</span>'
    )
    
    // JSX tags
    line = line.replace(
      /<\/?([A-Z]\w*)[^>]*>/g,
      (match) => `<span style="color: #569CD6">${match}</span>`
    )
    
    // Properties
    line = line.replace(
      /\b(\w+):/g,
      '<span style="color: #9CDCFE">$1</span>:'
    )
    
    return line
  }
  
  const sidebarIcons = [
    { icon: FolderTree, active: true },
    { icon: Search, active: false },
    { icon: GitBranch, active: false },
    { icon: Box, active: false },
    { icon: Settings, active: false },
  ]
  
  const displayLines = (animated ? displayedCode : code).split('\n')
  
  return (
    <div className="w-full h-full bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
      {/* Title Bar */}
      <div className="flex items-center justify-between h-8 bg-[#2d2d2d] px-3">
        <div className="flex items-center gap-2">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div 
              className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600"
              whileHover={{ scale: 1.1 }}
            />
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
        
        <div className="flex-1 text-center text-xs text-gray-400">
          {fileName} — Helmut Portfolio
        </div>
        
        <div className="flex items-center gap-1">
          <Minus className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          <Square className="w-3 h-3 text-gray-400 hover:text-white cursor-pointer" />
          <X className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
      
      {/* Tab Bar */}
      <div className="flex items-center h-9 bg-[#252526] border-b border-[#1e1e1e]">
        <div className="flex items-center px-3 h-full bg-[#1e1e1e] border-r border-[#252526]">
          <FileCode2 className="w-4 h-4 text-blue-400 mr-2" />
          <span className="text-sm text-gray-300">{fileName}</span>
          <X className="w-3 h-3 text-gray-500 ml-2 hover:text-white cursor-pointer" />
        </div>
        <div className="flex items-center px-3 h-full hover:bg-[#2a2a2a] cursor-pointer">
          <span className="text-sm text-gray-500">styles.css</span>
        </div>
        <div className="flex items-center px-3 h-full hover:bg-[#2a2a2a] cursor-pointer">
          <span className="text-sm text-gray-500">package.json</span>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex h-[calc(100%-4.5rem)]">
        {/* Sidebar */}
        <div className="w-12 bg-[#252526] flex flex-col items-center py-2 gap-1">
          {sidebarIcons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className={`p-2 cursor-pointer ${
                  item.active 
                    ? 'text-white border-l-2 border-white bg-[#2a2a2a]' 
                    : 'text-gray-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            )
          })}
        </div>
        
        {/* Code Area */}
        <div className="flex-1 flex">
          {/* Line Numbers & Code */}
          <div className="flex-1 overflow-auto">
            <div className="flex">
              {/* Gutter */}
              <div className="w-12 bg-[#1e1e1e] text-right pr-2 pt-2 select-none">
                {displayLines.map((_, index) => (
                  <div
                    key={index}
                    className={`text-xs leading-6 ${
                      index + 1 === currentLine ? 'text-[#C6C6C6]' : 'text-[#858585]'
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              
              {/* Code Content */}
              <div className="flex-1 p-2 text-sm text-[#D4D4D4]" style={{ fontFamily: "'Fira Code', 'JetBrains Mono', monospace" }}>
                <div className="relative">
                  {displayLines.map((line, index) => (
                    <div
                      key={index}
                      className={`leading-6 ${
                        index + 1 === currentLine ? 'bg-[#2a2a2a]' : ''
                      }`}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(line || ' ')
                        }}
                      />
                      {animated && index === displayLines.length - 1 && showCursor && (
                        <span className="inline-block w-0.5 h-5 bg-white ml-0.5 -mb-1 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Minimap */}
          {showMinimap && (
            <div className="w-24 bg-[#1e1e1e] border-l border-[#2a2a2a] p-2">
              <div className="text-[2px] leading-[3px] opacity-40" style={{ fontFamily: "'Fira Code', monospace" }}>
                {lines.map((line, index) => (
                  <div key={index} className="whitespace-nowrap overflow-hidden">
                    {line.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className={char === ' ' ? 'inline-block w-[2px]' : 'text-gray-400'}
                      >
                        {char === ' ' ? '' : '█'}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-6 bg-[#007ACC] flex items-center justify-between px-3 text-xs text-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
          <span>✓ 0 problems</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Ln {currentLine}, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>TypeScript React</span>
        </div>
      </div>
    </div>
  )
}