"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, FileCheck } from "lucide-react"

export default function DocumentUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const [showSuccess, setShowSuccess] = useState(false)
  const dragRef = useRef<HTMLDivElement>(null)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }

  const handleFiles = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles])
  }

  const handleUpload = async () => {
    if (files.length === 0) return

    setUploading(true)
    setUploadStatus("uploading")
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval)
          return prev
        }
        return prev + Math.random() * 30
      })
    }, 300)

    // Simulate upload completion
    setTimeout(() => {
      clearInterval(interval)
      setUploadProgress(100)
      setUploadStatus("success")
      setShowSuccess(true)
      setUploading(false)
      setTimeout(() => {
        setFiles([])
        setUploadProgress(0)
        setUploadStatus("idle")
        setShowSuccess(false)
      }, 3000)
    }, 2500)
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <section id="upload" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-primary font-serif text-sm md:text-base mb-2 tracking-widest uppercase">
            Segurança Garantida
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Enviar Documentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Envie seus documentos de forma segura e confidencial. Utilizamos criptografia de ponta para proteger suas
            informações.
          </p>
        </div>

        <div
          ref={dragRef}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="glass rounded-2xl p-8 md:p-16 text-center mb-8 border-2 border-dashed border-primary/40 hover:border-primary/80 transition-all duration-300 cursor-pointer group glow-gold hover:glow-gold"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="p-5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
              <Upload className="w-10 h-10 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2 text-lg">Arraste seus arquivos aqui</p>
              <p className="text-sm text-muted-foreground">ou clique para selecionar (PDF, DOC, DOCX - até 10MB)</p>
            </div>
            <input
              type="file"
              multiple
              onChange={(e) => handleFiles(Array.from(e.target.files || []))}
              className="hidden"
              id="file-input"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="file-input"
              className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors cursor-pointer px-4 py-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              Selecionar Arquivos
            </label>
          </div>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-3 mb-8 animate-fade-in-up">
            {files.map((file, index) => (
              <div
                key={index}
                className="glass rounded-lg p-4 flex items-center justify-between hover:bg-primary/5 transition-all duration-300 group/file"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover/file:from-primary/40 group-hover/file:to-primary/20 transition-all">
                    <span className="text-xs font-bold text-primary">{file.name.split(".").pop()?.toUpperCase()}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  disabled={uploading}
                  className="text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 p-2 hover:bg-primary/10 rounded-lg"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Upload Status */}
        {uploadStatus !== "idle" && (
          <div className="mb-8 animate-scale-in">
            <div className="glass rounded-lg p-8 border border-primary/30">
              {uploadStatus === "uploading" && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold text-foreground text-lg">Enviando documentos...</p>
                    <span className="text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
                      {Math.round(uploadProgress)}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden border border-primary/20">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-primary to-primary/70 transition-all duration-300 rounded-full shadow-lg shadow-primary/30"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </>
              )}
              {uploadStatus === "success" && showSuccess && (
                <div className="flex items-center gap-4 text-primary animate-fade-in-up">
                  <div className="p-3 rounded-full bg-primary/20">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-foreground">Sucesso!</p>
                    <span className="text-sm text-muted-foreground">
                      Seus documentos foram enviados e arquivados com segurança.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Upload Button */}
        {files.length > 0 && uploadStatus === "idle" && (
          <div className="flex gap-4 animate-fade-in-up">
            <button
              onClick={handleUpload}
              className="button-prestige flex-1 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 text-base"
              disabled={uploading}
            >
              Enviar {files.length} Documento{files.length !== 1 ? "s" : ""}
            </button>
            <button
              onClick={() => setFiles([])}
              className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-base"
            >
              Limpar
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
