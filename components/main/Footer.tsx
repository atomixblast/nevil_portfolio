import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed

} from "react-icons/rx";
import {
    FaWhatsapp,
}from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                  
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Reseau social
                        </div>
                       
                        <a href="https://wa.me/+330745905795" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaWhatsapp/>
                            <span className="text-[15px] ml-[6px]">
                                Whatsapp
                            </span>
                        </a>
                       
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contactez-moi</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxEnvelopeClosed/>
                            <a href="mailto:siassiaarchangenevil@gmail.com" className="text-[15px] ml-[6px] cursor-pointer">
                               siassiaarchangenevil@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Footer;