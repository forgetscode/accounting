import React from "react";

const Loading = () => {
    return(          
        <div className="flex items-center justify-center h-full w-full">
            <div className='flex flex-col space-y-4'>
                <div className="border-t-transparent border-solid animate-spin rounded-full border-purple-600 border-4 h-12 w-12 mx-auto"></div>
                <p className='header mx-auto'>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;