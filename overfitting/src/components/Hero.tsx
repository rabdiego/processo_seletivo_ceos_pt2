import Image from 'next/image'

export default function Hero() {
    return (
        <div
        style={{
            display : 'flex',
            justifyContent : 'center'
        }}>
            <Image
            src='/Hero.png'
            alt='Hero'
            width={0}
            height={0}
            sizes='100vw'
            style={{width : '85%', height : 'auto', borderRadius : '60px'}}
            />
        </div>
    )
}