import Image from 'next/image';

export function WorkInProgress() {
    return (
        <div style={{ position: 'fixed', width: '100%', height: '100%', top: '64px', left: '0', right: '0', bottom: '0'  }}>
            <Image style={{ objectFit: 'cover', top:'30px',width: '100%', height: '100vh' }}
                src="/WorkInProgress.jpg"
                alt="work in progress"
                width={0} height={0}
                sizes="100vw" />
        </div>
    );
}