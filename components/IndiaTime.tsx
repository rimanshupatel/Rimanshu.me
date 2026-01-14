'use client'

import React, { useEffect, useState } from 'react'

export default function IndiaTime() {
    const [time, setTime] = useState<string>('')

    useEffect(() => {
        // Initial update
        updateTime()

        // Update every second
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    const updateTime = () => {
        const now = new Date()
        const timeString = now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        })
        setTime(timeString)
    }

    if (!time) return null // Avoid hydration mismatch

    return (
        <div className="flex items-center gap-2 text-xs sm:text-xs font-mono text-neutral-500 dark:text-neutral-400 opacity-80 uppercase tracking-wider">
            <span className="shrink-0">IST · </span>
            <span className="shrink-0 w-[4.5em]">{time}</span>
        </div>
    )
}
