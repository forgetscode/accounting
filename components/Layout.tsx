import Link from 'next/link';
import { useRouter } from 'next/router';
import NearMeIcon from '@mui/icons-material/NearMe';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForumIcon from '@mui/icons-material/Forum';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Loading from './Loading';

const Fade = require("react-reveal/Fade")

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ showSideBar, setShowSideBar ] = useState<Boolean>(true);
  const [loading, setLoading] = useState(true);

  const menuItems = [
        {
            href: '/',
            title: 'Dashboard',
            icon: <DashboardIcon style={{ fontSize: 28 }}/>
        },
        {
            href: '/activity',
            title: 'Activity',
            icon: <BarChartIcon style={{ fontSize: 28 }}/>
        },
        {
            href: '/messages',
            title: 'Messages',
            icon: <ForumIcon style={{ fontSize: 28 }}/>
            },
        {
            href: '/clients',
            title: 'Clients',
            icon: <GroupIcon style={{ fontSize: 28 }}/>
        },
        {
            href: '/tasks',
            title: 'Tasks',
            icon: <TaskIcon style={{ fontSize: 28 }}/>
        },
        {
            href: '/logout',
            title: 'Logout',
            icon: <LogoutIcon style={{ fontSize: 28 }}/>
        },
    ];

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, []);

    useEffect(() => {
        if (window.innerWidth >= 1024) {
          setShowSideBar(true);
        } else {
          setShowSideBar(false);
        };
    
        const updateMedia = () => {
          if (window.innerWidth >= 1024) {
            setShowSideBar(true);
          } else {
            setShowSideBar(false);
          }
        };

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    
    if (loading) {
        return (
            <div className='h-screen w-screen'>
                <Loading/>
            </div>
        );
    }

    return (
        <Fade>
            <div className='flex flex-row'>
                <div className={`min-h-screen flex flex-col ${showSideBar? "w-80": "w-24"} transition-all`}>
                    <div className='flex h-full items-center w-full section-background'>
                        <aside className='w-full'>
                            <nav>
                                <ul>
                                {menuItems.map(({ href, title, icon }) => (
                                    <li className={`flex py-4 justify-center border-l-[3px] border-gray-200 ${router.asPath === href && 'border-violet-600'}`}>
                                        <Link href={href}>
                                                <div className='flex flex-row items-end transition-all group cursor-pointer'>
                                                        <div 
                                                        className={` ${showSideBar? "block" : "hidden"} p-2 title group-hover:hover-color ${
                                                            router.asPath === href && 'selected-color '
                                                            }`}
                                                        >
                                                            {icon}
                                                        </div>
                                                        <div 
                                                            className={`${showSideBar? "hidden" : "block"} p-2 title group-hover:hover-color ${
                                                            router.asPath === href && 'selected-color '
                                                            }`}
                                                        >
                                                            <Tooltip placement="right" title={title}  enterDelay={0}>
                                                                {icon}
                                                            </Tooltip>
                                                        </div>
                                                        <p
                                                            className={`${showSideBar? "w-32 md:flex p-2 title group-hover:hover-color" : "hidden"} transition-all ${
                                                            router.asPath === href && 'selected-color'
                                                            }`}
                                                        >
                                                            {title}
                                                        </p>
                                                </div>
                                        </Link>
                                    </li>
                                ))}
                                </ul>
                            </nav>
                        </aside>
                    </div>
                    {showSideBar ? (
                    <button
                        type="button"
                        onClick={() => setShowSideBar(!showSideBar)}
                        className="hidden sm:block absolute z-10 section-background rounded-full left-[292px] top-1/2 w-10 h-14 text-center pl-4 selected-color text-xl transition-all"
                    >
                        <Tooltip title="Close" placement="right">
                            <p> {'<'} </p>
                        </Tooltip>
                    </button>
                    ) : (
                    <button
                        type="button"
                        onClick={() => setShowSideBar(!showSideBar)}
                        className="hidden sm:block absolute z-10 section-background rounded-full left-[72px] top-1/2 w-10 h-14 text-center pl-4 selected-color text-xl transition-all"
                    >
                        <Tooltip title="Open" placement="right">
                            <p> {'>'} </p>
                        </Tooltip>
                    </button>
                )} 
                </div>
    
                <main className='flex-1'>{children}</main>
            </div>
        </Fade>
    );
}