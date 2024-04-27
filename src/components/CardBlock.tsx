import { cn } from "@/lib/utils"

interface CardBlockProps {
    children: React.ReactNode,
    variant?: 'bright' | 'default',
    className?: string,
}

const CardBlock = ({children, variant, className}: CardBlockProps) => {
    return (
        <div className={cn(
        'px-8 py-6 font-medium backdrop-blur-md ring-inset ring-[6px] rounded-xl',
        variant === 'bright' ?
            'bg-zinc-500/50 ring-zinc-400/25' :
            'bg-zinc-600/50 ring-zinc-500/25',
        className)}>
            {children}
        </div>
    )
}

export default CardBlock