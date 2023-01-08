import React, { useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import NotificationsDropdown from './NotificationsDropDown';

export default function Header({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [input, setInput] = useState('');

    const menuItems = [
        {
            href: '/',
            title: 'Dashboard',
        },
        {
            href: '/activity',
            title: 'Activity',
        },
        {
            href: '/messages',
            title: 'Messages',
        },
        {
            href: '/clients',
            title: 'Clients',
        },
        {
            href: '/tasks',
            title: 'Tasks',
        },
        {
            href: '/logout',
            title: 'Logout',
        },
        {
            href: '/search',
            title: 'Search',
        },
        {
            href: '/profile',
            title: 'Profile',
        },
    ];

    const user = [
        {
            id: 1,
            name: 'John Doe',
        },
    ];

    const calendar = [
        {
            date: 'Jan 2023',
        },
    ]
    
    const handleFormOpen = () => {
        setIsFormOpen(true);
    };
    
    const handleFormClose = () => {
        setIsFormOpen(false);
    };
    
    const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push({
          pathname: '/search',
          query: { input: input }
        }, '/search');
      }

      <form onSubmit={handleFormSubmit}>
        <input
            className='scale-100 origin-right w-48 ease-in-out transition-all bg-gray-100 rounded-lg px-1'
            type="text"
            placeholder="Search..."
            defaultValue={input}
            onChange={(event) => setInput(event.target.value)}
        />
        <Tooltip title={"Search"} placement="bottom">
            <button type="submit" className='hover-color scale-100 ease-in-out transition-all'>
                <ChevronRightIcon style={{ fontSize: 28 }}/>
            </button>
        </Tooltip>
      </form>


    const menuItem = menuItems.find(item => item.href === router.asPath);
    
    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='h-40 flex flex-col'>
                <header className='flex flex-row w-full h-36 justify-between items-center px-4 lg:px-12 space-x-4'>
                    <h1 className='header md:text-3xl text-xl'>{ menuItem ? menuItem.title : <></>}</h1> 
                    <div className='flex flex-row px-2 space-x-4 md:space-x-6 title items-end'>
                        <Tooltip title={"Calendar"} placement="bottom">
                            <div className='flex flex-row cursor-pointer space-x-1'>
                                <CalendarTodayIcon style={{ fontSize: 28 }}/>
                                <div className='xl:flex flex-row cursor-pointer space-x-1 hidden'>
                                    <p className='base-text'> Today/ </p>
                                    <p className='hover-color'> {calendar[0].date} </p>
                                    <p className='hover-color'> {``} </p>
                                </div>
                            </div>
                        </Tooltip>                                      
                        <div className='hidden md:flex'>
                            {!isFormOpen ? (
                                    <div className='flex flex-row space-x-2 -mr-12 ease-in-out transition-all duration-500'>
                                    <Tooltip title={"Open"} placement="bottom">
                                        <button onClick={handleFormOpen}>
                                            <SearchIcon style={{ fontSize: 28 }}/>
                                        </button>
                                    </Tooltip>
                                    <form onSubmit={handleFormSubmit} className="">
                                        <input className='origin-right scale-0 w-0 ease-in-out transition-all duration-500 bg-gray-100 rounded-lg px-1' type="text" placeholder="Search..." />
                                        <Tooltip title={"Search"} placement="bottom">
                                            <button type="submit" className='hover-color scale-0 ease-in-out transition-all'>
                                                <ChevronRightIcon style={{ fontSize: 28 }}/>
                                            </button>
                                        </Tooltip>
                                    </form>
                                </div>
                            )
                            : (
                                <div className='flex flex-row space-x-2 ease-in-out transition-all duration-500'>
                                    <Tooltip title={"Close"} placement="bottom">
                                        <button onClick={handleFormClose}>
                                            <SearchIcon style={{ fontSize: 28 }}/>
                                        </button>
                                    </Tooltip>
                                    <form onSubmit={handleFormSubmit}>
                                    <input
                                        className='scale-100 origin-right w-28 lg:w-36 xl:w-48 ease-in-out transition-all duration-500 bg-gray-100 rounded-lg px-1'
                                        type="text"
                                        placeholder="Search..."
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                    />
                                    <Tooltip title={"Search"} placement="bottom">
                                        <button type="submit" className='hover-color scale-100 ease-in-out transition-all duration-500'>
                                            <ChevronRightIcon style={{ fontSize: 28 }}/>
                                        </button>
                                    </Tooltip>
                                    </form>
                                </div>
                            )}
                        </div>

                        <div className='flex md:hidden'>
                            <Link href="/search">
                                <Tooltip title={"Open"} placement="bottom">
                                    <button onClick={handleFormOpen}>
                                        <SearchIcon style={{ fontSize: 28 }}/>
                                    </button>
                                </Tooltip>
                            </Link>
                        </div>

                        <NotificationsDropdown/>
                        
                        <Link href="/profile">
                            <Tooltip title={"Profile"} placement="bottom">
                                <div className='flex flex-row cursor-pointer space-x-1'>
                                    <PersonIcon style={{ fontSize: 28 }}/>
                                    <div className='xl:flex flex-row cursor-pointer space-x-1 hidden'>
                                        <p className='base-text w-12 truncate ... 2xl:w-full'>{user[0].name} </p>
                                    </div>
                                </div>
                            </Tooltip>
                        </Link>
                    </div>
                </header>
                <div className='sm:flex px-2 hidden sm:px-4 lg:px-12 -mt-8'>
                    {
                        menuItem?.title !== 'Dashboard' ?
                        <div className='flex-row flex'>
                            <Link href={menuItems[0]?.href}>
                                <p className='subheader pr-2 lg:text-xl md:text-lg text-base'> Dashboard </p> 
                            </Link>
                            <Link href={menuItem?.href!}>
                                <p className='title lg:text-xl md:text-lg text-base'> {`> `}{ menuItem ? menuItem.title : <></>} </p>
                            </Link>
                        </div>
                        :
                        <></>
                    }  
                </div>
            </div>
            <main className='h-full w-full'>
                {children}
            </main>
        </div>
    );
    }
