"use client"

import { useState } from 'react'

interface Toast {
    id: number
    title: string
    description: string
}

interface ToastOptions {
    title: string
    description: string
    duration?: number
}

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([])

    const toast = ({ title, description, duration = 2500 }: ToastOptions) => {
        const id = Date.now()
        const newToast: Toast = { id, title, description }

        setToasts(prev => [...prev, newToast])

        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, duration)
    }

    return { toast, toasts }
}

interface ToasterProps {
    toasts: Toast[]
}

export function Toaster({ toasts }: ToasterProps) {
    return (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
            {toasts.map(toast => (
                <div key={toast.id} className="bg-white border-x-4 border-[#FF5900] rounded-lg p-4 shadow-lg animate-in slide-in-from-top max-w-sm mx-auto">
                    <div className="font-semibold text-gray-900">{toast.title}</div>
                    <div className="text-gray-600 text-sm">{toast.description}</div>
                </div>
            ))}
        </div>
    )
}