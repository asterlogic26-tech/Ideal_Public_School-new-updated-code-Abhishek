import img1 from "../assets/CCTV-Img.avif"
import img2 from "../assets/ActiveBaseLearning-Img.webp"
import img3 from "../assets/SafeFriendly-Img.webp"
import img4 from "../assets/Teachers-Img.webp"
import FeaturedCard from "../components/FeatureCard"

const WhyChooseCards = () => {
    return (
        <>
            <section className=" py-14 overflow-hidden">
                <div className="relative max-w-7xl mx-auto h-[520px] flex justify-center">

                   <div className="absolute left-[5%] top-[80px]">
                     <FeaturedCard
                        title="CCTV Surveillance"
                        desc="Complete CCTV monitoring to ensure safety and security of children at all times."
                        img={img1}
                        bg="bg-[#ff5b5b]"
                        rotate="-10deg"
                    />
                   </div>

                   <div className="absolute left-[27%] top-[20px]">
                     <FeaturedCard
                        title="Activity-Based Learning"
                        desc="Engaging activities that encourage creativity, curiosity, and joyful learning."
                        img={img2}
                        bg="bg-[#4dd0e1]"
                        rotate="-4deg"
                    />
                   </div>

                    <div className="absolute left-[50%] top-[60px]">
                           <FeaturedCard
                        title="Safe & Friendly Environment"
                        desc="A warm, secure, and child-friendly environment where kids feel happy and confident."
                        img={img3}
                        bg="bg-[#5be37d]"
                        rotate="4deg"
                    />
                    </div>

                    <div className="absolute left-[72%] top-[30px]">
                         <FeaturedCard
                       title="Qualified and Caring Teachers"
                       desc="Experienced, loving teachers dedicated to nurturing every child’s growth."
                       img={img4}
                       bg="bg-[#d65ad1]"
                       rotate="10deg"
                    />
                    </div>

                </div>
            </section>
        </>
    )
};

export default WhyChooseCards;  