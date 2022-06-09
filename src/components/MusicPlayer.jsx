import React from 'react'

const MusicPlayer = () => {
  return (
    <div className="musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5">
        {/* Upper Part */}
        <div className="upperPart">
            {/* profile */}
            <div className="profile flex">
                <img 
                src={require("../img/Mask Group 23.png")} 
                alt=""
                className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
                />
                <div className="details flex flex-col ml-4">
                    <span className="text-[1rem]">Tristam Bone Dry</span>
                    <span className="text-sm text-gray-500">Unknown Artist</span>

                </div>
            </div>
            <div>
                <img src={require("../img/path.png")} alt="" className=" h-[1rem] "/>
            </div>
        </div>
        <div className="lowerPart"></div>
    </div>
  )
}

export default MusicPlayer