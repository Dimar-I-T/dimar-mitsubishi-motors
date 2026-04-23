"use client";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-black w-full px-[100px] max-md:px-[10px] md:grid md:grid-cols-2 max-md:flex max-md:flex-col">
            <div className="flex flex-col justify-center max-md:items-center max-md:w-full">
                <Image
                    src="/mitsubishi-footer-1.png"
                    alt="logo"
                    width={300}
                    height={300}
                    className="w-[230px] h-[230px] max-md:w-[133px] max-md:h-[133px]"
                    priority
                    unoptimized
                />
            </div>

            <div className="flex flex-col py-[30px] items-end max-md:items-center gap-8">
                <div className="flex flex-col items-end max-md:items-center gap-5">
                    <h1 className="text-[30px] max-md:text-[17px] font-bold text-end">
                        Socials
                    </h1>

                    <div className="flex flex-row justify-end max-md:items-center gap-x-[20px]">
                        <a href="https://www.linkedin.com/in/dimar-ilham-tamara-b145b7315">
                            <Image
                                src="/linkedin.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px]"
                                priority
                                unoptimized
                            />
                        </a>

                        <a href="https://www.instagram.com/dimar_tamara/">
                            <Image
                                src="/instagram.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px]"
                                priority
                                unoptimized
                            />
                        </a>

                        <a href="https://www.youtube.com/@dimartamara1">
                            <Image
                                src="/youtube.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="w-[50px] h-[50px] max-md:w-[30px] max-md:h-[30px]"
                                priority
                                unoptimized
                            />
                        </a>
                    </div>
                </div>

                <h1 className="text-[16px] max-md:text-[10px] text-end">
                    Created by Dimar Ilham Tamara
                </h1>
            </div>
        </div>
    );
};

export default Footer;