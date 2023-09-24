import Image from "next/image";

function Landing() {

    return (
        <div className="landingContainer" style={{
            display: "flex"

        }}>
            <Image style={{position:'fixed', width:'100%',marginLeft:'0',height:'100%'}} 
                src={"/DreamJob.png"}
                alt='get dream job'
                width={0}
                height={0}
                sizes="100vw" 
            />

        </div>
    )
}

export default Landing;