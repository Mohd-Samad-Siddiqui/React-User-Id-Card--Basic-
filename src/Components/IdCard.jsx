import { FaFacebook, FaInstagram, FaYoutube, FaRegHeart, FaRegComment } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import Button from "./Button"


function IdCard({name, role, link1, link2, link3, link4, link5, likeCount, commentCount, shareCount, imgUrl}) {

    return (

        <>
            {/*-----------IdentityCardBox------------*/}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">

                {/*-------------BlueBand---------------*/}
                <div className="relative bg-blue-500 w-full h-[40%]   aspect-video">

                    {/*--------------Image------------*/}
                    <img className="absolute left-1/2 -translate-x-1/2 translate-y-[25%] h-full aspect-square rounded-full object-cover object-top border-4 border-blue-500 p-1 bg-white" src={imgUrl} alt="Error loading image"/>
                </div>

                {/*-----------Info Container-----------*/}
                <div className="flex items-center flex-col mt-7 pt-3">

                    {/*---------CompanyName---------*/}
                    <div className="font-bold text-xl mt-1">{name}</div>

                    <div className="font-semibold text-xs mt-1">{role}</div>

                    {/*---------SocialMediaIcons---------*/}
                    <div className="flex justify-center items-center space-x-4 mt-3">
                        <FaFacebook className="cursor-pointer" color="#1877F2" size={20} href={link1}/>

                        <AiFillTwitterCircle className="cursor-pointer" color="#1DA1F2" size={24} href={link2}/>

                        <FaInstagram className="cursor-pointer" color="#E1306C" size={20} href={link3}/>

                        <FaYoutube className="cursor-pointer" color="#FF0000" size={20} href={link4}/>
                    </div>

                    {/*---------Buttons---------*/}
                    <div className="flex justify-center items-center space-x-4 text-[12px] mt-3">
                        <Button text="Subscribe" href={link5}/>
                        <Button text="Message"/>
                    </div>

                    {/*---------Like-Comment-Share-Icons---------*/}
                    <div className="flex justify-center items-center space-x-3 my-3">
                        <div className="flex justify-center items-center text-sm gap-1">
                            <FaRegHeart className="cursor-pointer" />
                            <span>{likeCount}</span>
                        </div>
                        <span>|</span>
                        <div className="flex justify-center items-center text-sm gap-1">
                            <FaRegComment className="cursor-pointer" />
                            <span>{commentCount}</span>
                        </div>
                        <span>|</span>
                        <div className="flex justify-center items-center text-sm gap-1">
                            <PiShareFatLight className="stroke-current stroke-6 cursor-pointer" />
                            <span>{shareCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IdCard;
