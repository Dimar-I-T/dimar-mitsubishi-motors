'use client'
import Image from "next/image";
import { useState } from "react";
import mobilData from "../data/mobil.json"

export default function Products() {
    const models = ["All", "EVs/PHEV", "SUVs", "PICKUP", "CARs", "MPVs", "MINICARs"];
    const [selected, setSelected] = useState("EVs/PHEV");
    const { data } = mobilData;
    const filtered = selected === "All" ? data : data.filter(mobil => mobil.model.includes(selected));

    return (
        <div id="products" className="relative w-full min-h-screen flex flex-col gap-y-[30px] items-center px-[78px] max-md:px-[20px] pb-20">
            <Image
                src={`/bgbagusview.jpg`}
                alt="Background View"
                fill
                style={{
                    objectFit: "cover"
                }}
                priority
            />

            <div className="absolute w-full h-full bg-black/50 z-10" />

            <div className="mt-[30px] w-full items-center justify-center flex flex-col gap-y-[10px] z-20">
                <h1 className="text-[64px] max-md:text-[40px] text-putih font-bold z-20">
                    Products
                </h1>

                <div className="bg-red-600 w-[200px] max-md:w-[100px] h-[5px] z-20" />
            </div>

            <h1 className="text-center text-[30px] max-md:text-[19px] font-medium z-20">
                It is all cars produced by Mitsubishi Motors.
            </h1>

            <div className="w-full lg:w-[1140px] bg-white/20 flex flex-col justify-center gap-y-10 max-md:gap-y-5 px-[40px] py-[25px] z-20 rounded-[20px]"
            style={{
                background: "linear-gradient(315deg, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.08) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.1) inset",
            }}>
                <div className="w-full justify-center flex flex-col gap-y-[1px] z-20">
                    <h1 className="text-[30px] max-md:text-[19px] text-putih z-20">
                        Models
                    </h1>

                    <div className="bg-red-600 w-[109px] max-md:w-[70px] h-[3px] z-20" />
                </div>

                <div className="w-full flex flex-row flex-wrap items-center gap-[24px] max-md:gap-[15px]">
                    {models.map((mdl) => (
                        <button
                            key={mdl}
                            onClick={() => setSelected(mdl)}
                            className="flex flex-row items-center justify-center gap-[8px] max-md:gap-[5px] cursor-pointer bg-transparent border-none outline-none"
                        >
                            <div className="w-[25px] h-[25px] max-md:w-[16px] max-md:h-[16px] rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors duration-200 shrink-0">
                                {selected === mdl && (
                                    <div className="w-[15px] h-[15px] max-md:w-[8px] max-md:h-[8px] rounded-full bg-red-600" />
                                )}
                            </div>
                            <span className={`text-[20px] max-md:text-[13px] text-white mb-1 transition-colors duration-200`}>
                                {mdl}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="w-full h-[601px] max-md:h-[330px] overflow-y-auto flex flex-row max-md:flex-col md:flex-wrap gap-x-[10px] max-md:items-center max-md:gap-x-[6px] gap-y-[15px] max-md:gap-y-[1px] px-[10px] py-[10px] max-md:px-[6px] max-md:py-[6px] z-20">
                    {filtered.map((isi, index) => (
                        <div key={index} className="w-[337px] max-md:w-[180px] flex flex-col items-center gap-[10px] max-md:gap-[6px] px-[10px] py-[10px] max-md:px-[6px] max-md:py-[6px]">
                            <img src={isi.src} className="w-[337px] max-md:w-[180px] h-[223px] max-md:h-[119px] scale-[337/210] object-cover rounded-[20px]" />

                            <h1 className="text-[20px] max-md:text-[12px] text-white text-center font-medium">
                                {isi.name}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}