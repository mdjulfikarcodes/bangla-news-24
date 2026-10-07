import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center"> <div className="flex flex-col items-center gap-4"> <span className="loading loading-spinner loading-lg text-[#C10007]"></span> <p className="text-lg font-medium text-gray-600"> Loading... </p> </div> </div>
    );
};

export default LoadingPage;