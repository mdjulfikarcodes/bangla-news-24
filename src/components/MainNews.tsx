
import Image from 'next/image';
import Link from 'next/link';

interface News {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
}

const MainNews = ({ news }: { news: News[] }) => {
    const [firstNews, ...otherNews] = news
    return (
       <Link href={`/news/${firstNews.id}`}>
        <div className=" flex gap-2">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        height={600}
                        width={500}
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt} />
                </figure>
                <div className="card-body">
                    <p className='text-[#C10007] font-semibold'>{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>

                </div>
            </div>
            <div className='grid p-1 gap-2'>
                {otherNews.slice(0,4).map(on => 
                <div className="card bg-base-100 border border-gray-300 p-1"
                 key={on.id}>
                    <p className='text-[#C10007] font-semibold'>{firstNews.category}</p>
                    <div>{on.title}</div>
                </div>)}
            </div>
        </div>
       </Link>
    );
};

export default MainNews;