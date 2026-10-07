import NewsCard from '@/components/NewsCard';
import { notFound } from 'next/navigation';
import type { ComponentProps } from 'react';

interface CategoryNewsProps {
    params: {
        categoryId: string
    }
}

type NewsItem = ComponentProps<typeof NewsCard>['news'] & {
    id: string | number
}

const CategoryNews = async ({params}: CategoryNewsProps) => {
    const {categoryId} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews: NewsItem[] = data.data

      if(!categoryNews){
        notFound();
      }
    return (
        <div>
            <h1 className='font-bold text-2xl border-b-2 border-[#C10007] mb-5'>{data.title}</h1>

            <div className='grid grid-cols-3 gap-5'>
                {categoryNews.map(news => <NewsCard key={news.id} news={news}/>)}
            </div>
        </div>
    );
};

export default CategoryNews;