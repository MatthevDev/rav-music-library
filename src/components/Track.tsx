'use client'

import { Folder, Info, Music, Pause, Play, Timer } from "lucide-react"
import CardBlock from "./CardBlock"
import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"

const Track = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <CardBlock variant='bright' className="px-6 py-[7px] w-full flex justify-between items-center">
            <div className="w-full flex justify-start items-center space-x-6">
                <div className="flex justify-center items-center text-sm">
                    <Button
                    aria-label="Play song"
                    variant={'ghost'}
                    className="p-2"
                    onClick={() => setIsPlaying(!isPlaying)}>
                        {!isPlaying ? (
                            <Play className="w-6 h-6" />
                        ) : (
                            <Pause className="w-6 h-6" />
                        )}
                    </Button>
                </div>
                <div className="flex justify-center items-center text-sm">
                    <Image
                    src='/images/new-moon.jpg'
                    width={48}
                    height={48}
                    alt="cover image"
                    />
                </div>
                <div className="flex justify-center items-center font-semibold">
                    <Music className="w-4 h-4 mr-1" />
                    Title
                </div>
            </div>
            <div className="w-full flex justify-end items-center space-x-8">
                <div className="flex justify-center items-center font-semibold">
                    <Folder className="w-4 h-4 mr-1" />
                    Album
                </div>
                <div className="flex justify-center items-center font-semibold">
                    <Timer className="w-4 h-4 mr-1" />
                    Duration
                </div>
                <div className="flex justify-center items-center font-semibold">
                    <Button
                    aria-label="Info about song"
                    variant={'ghost'}
                    className="p-2"
                    >
                        <Info className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </CardBlock>
    )
}

export default Track