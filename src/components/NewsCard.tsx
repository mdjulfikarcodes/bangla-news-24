import Image from 'next/image';
import Link from 'next/link';

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt?: string; // optional, যাতে data-তে না থাকলেও crash না করে
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            height={600}
            width={500}
            src={news.imageUrl}
            alt={news.imageAlt || news.title || 'News image'}
          />
        </figure>
        <div className="card-body">
          <p className="text-[#C10007] font-semibold">{news.category}</p>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;