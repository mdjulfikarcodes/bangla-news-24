import React from 'react';

const NewsDetail = async ({params}: {params:
    {newsId:string}}) => {
        const {newsId} = await params;
        const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
        const data = await res.json();

        const news = data.data
        console.log(news)
    return (
        <div>
            <h1>{news.title}</h1>
            {/* image */}

            <p>{news.text}</p>

        </div>
    );
};

export default NewsDetail;


//cmrl6461857ko