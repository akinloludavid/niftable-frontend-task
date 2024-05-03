import Image from 'next/image'
import Container from '../Container'
import Video from '../Video'
import { roadMap } from './data'

export default function RoadMap() {
    return (
        <Container className='relative'>
            <Video
                src='/assets/videos/roadmap-video.mp4'
                className='absolute left-0 w-full h-2/3 bottom-0 object-cover'
            />

            <div className='flex flex-col gap-4 relative z-10 '>
                {roadMap.map(road => (
                    <div
                        key={road.title}
                        className='bg-[#13171D99] rounded-[6px] text-white flex items-center h-[250px]'
                    >
                        <div className='flex flex-col gap-[15px] p-6 w-[75%]'>
                            <h3 className='text-[38px] font-monument'>
                                {road.title}
                            </h3>
                            <p className='font-satoshi_regular'>
                                {road.description}
                            </p>
                        </div>
                        <Image
                            src={road.img}
                            alt={road.title}
                            width={400}
                            height={400}
                            className='w-[25%] h-full'
                        />
                    </div>
                ))}
            </div>
        </Container>
    )
}
