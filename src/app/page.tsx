import About from '@/components/About'
import ComingSoon from '@/components/ComingSoon'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Mission from '@/components/Mission'
import Profiting from '@/components/Profiting'
import RoadMap from '@/components/Roadmap'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <About />
            <Profiting />
            <Mission />
            <ComingSoon />
            <RoadMap />
            <Footer />
        </main>
    )
}
