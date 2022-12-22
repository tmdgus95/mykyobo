import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loading = () => {
    return (
        <div className='text-center mt-10'>
            <ClipLoader color='#36d7b7' size={400} />
        </div>
    );
};

export default Loading;
