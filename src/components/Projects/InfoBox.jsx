    import React from 'react'

    const InfoBox = (props) => {
        return (
            <>
                <div className="flex absolute w-full h-full" style={{
                    backgroundImage: `url(${props.link})`,
                    opacity: `25%`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundAttachment: `fixed`,
                    backgroundSize: `cover`
                }}></div>
                <div className="flex relative w-full sm:text-5xl text-lg font-bold text-center justify-center align-center">
                    {props.name}
                </div>
                <div className="flex relative w-full p-1 sm:p-0 sm:w-[60%] text-sm sm:text-xl justify-center ">
                    {props.desc}
                </div>
                <div className="flex relative w-[80%] text-sm sm:text-xl justify-center gap-8">
                    {props.languages}
                </div>
            </>
        )
    }


    export default InfoBox;
