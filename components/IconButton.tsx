
//give me the boilerplate for a react functional component for typescript with IconButton as the name

import React from "react";

//give me a typescript interface for pageProps that uses icon, link, and title
interface pageProps {
    icon: React.ReactElement<any, any>,
    link: string,
    title: string,
}

const IconButton: React.FC<pageProps> = ({icon, link, title}) => {
  //make the component return a button that is purple on active state a circular icon on the right of the div and text in the center that is white on inactive state use react useState
    const [active, setActive] = React.useState(false);
    return (
        <div className="py-4">
            <button className={`p-2 rounded-xl w-36 h-14 items-center origin-botom transition-all  ${active ? 'bg-violet-700 shadow-md shadow-violet-700 ml-4 mb-2' : 'bg-gray-300'}`} onClick={() => setActive(!active)}>
                <div className='flex flex-row w-full'>
                    <i className="absolute rounded-full ml-2">O</i>
                    <p className="w-full text-white justify-center font-medium">{title}</p>
                </div>
            </button>
        </div>
    );
}
export default IconButton;