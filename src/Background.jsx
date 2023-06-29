import video from './assets/clouds.mp4'
import cloud from './assets/cloud.jpg'

export default function Background () {
    return (
        <>
        <section className="background">
            {/* <video id="myVideo" autoPlay={"autoplay"} muted preLoad="auto" loop ><source src={video} type="video/mp4" alt="moving blue particles swirling on a light blue background"/></video> */}
            <image src={cloud}></image>
        </section>
        </>
    )
}