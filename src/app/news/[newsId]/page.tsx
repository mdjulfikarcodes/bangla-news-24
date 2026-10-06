
import React from "react";

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();

  // Check API response
  if (!data.success || !data.data) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold">
          News not available
        </h1>

        <p className="mt-3">
          This news does not have an article body.
        </p>

        <p className="mt-2 text-gray-500">
          News ID: {newsId}
        </p>
      </div>
    );
  }

  const news = data.data;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">
        {news.title}
      </h1>

      <p className="mt-6">
        {news.text}
      </p>
    </div>
  );
};

export default NewsDetails;
