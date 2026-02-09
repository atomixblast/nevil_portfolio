"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-40 w-full z-20"
                >
                    <div className="h-full w-full md:w-3/6 flex flex-col gap-5 justify-center text-start">
                        {/* Tags */}
                        <div className="hidden md:flex flex-row items-center md:gap-5 gap-1">
                            {["Développeur Web Junior", "React & Django", "Curieux et Motivé"]
.map(
                                (title, index) => (
                                    <InView triggerOnce={false} key={index}>
                                        {({ inView, ref }) => (
                                            <motion.div
                                                ref={ref}
                                                initial="hidden"
                                                animate={inView ? "visible" : "hidden"}
                                                variants={slideInFromTop}
                                                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                                            >
                                                <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                                                <h1 className="Welcome-text text-[13px]">
                                                    {title}
                                                </h1>
                                            </motion.div>
                                        )}
                                    </InView>
                                )
                            )}
                        </div>

                        {/* Main Title */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                                >
                                   <span>
    Donner vie à mes idées
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {" "}en code{" "}
    </span>
    et les voir se réaliser
</span>

                                </motion.div>
                            )}
                        </InView>

                        {/* Achievements / Highlights */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.8)}
                                    className="text-sm md:text-md text-gray-400 my-5 max-w-[650px] z-30"
                                ><li>
    Suivi d'une formation en développement web et systèmes informatiques
</li>
<li>
    Création de projets personnels pour mettre en pratique HTML, CSS, JavaScript, React et Django
</li>
<li>
    Utilisation d’outils tels que VS Code, Figma et WordPress pour concevoir et prototyper des applications
</li>
<li>
    Découverte et pratique de Linux, avec maîtrise des commandes de base et gestion de fichiers
</li>
<li>
    Participation à des mini-projets et expérimentations pour renforcer mes compétences techniques
</li>

                                </motion.div>
                            )}
                        </InView>

                        {/* CTA Button */}
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.a
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    href="#about"
                                    variants={slideInFromLeft(1)}
                                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                                >
                             En savoir plus!
                                </motion.a>
                            )}
                        </InView>
                    </div>

                    {/* Hero Image */}
                    <InView triggerOnce={false}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={slideInFromRight(0.8)}
                                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
                            >
                                <Image
                                    src="/mainIconsdark.svg"
                                    alt="coding illustration"
                                    height={650}
                                    width={650}
                                />
                            </motion.div>
                        )}
                    </InView>
                </motion.div>
            )}
        </InView>
    );
};

export default HeroContent;
