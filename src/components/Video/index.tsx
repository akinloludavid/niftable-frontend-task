interface VideoProps {
    src: string
    className?: string
}
export default function Video({ src, className }: VideoProps) {
    return (
        <video autoPlay loop muted className={className}>
            <source src={src} type='video/mp4'></source>
            Your browser does not support the video tag.
        </video>
    )
}
