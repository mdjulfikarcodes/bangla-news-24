
import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headline {
    id:string
    title:string
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines: Headline[] = data.data;

    return (
        <div className="bg-[#C10007] text-white  ">
            <div className="flex items-center max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">
                    সর্বশেষ:
                </div>
                <MarqueeText className="py-1"
                    direction="right" duration={10}>
                    {headlines.map((h: Headline) => (
                        <Link key={h.id} href={`/news/${h.id}`}>
                            <span>{h.title}</span>
                            <span className='mx-5'>•</span>
                        </Link>
                    ))}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;