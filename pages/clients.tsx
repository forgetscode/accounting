import Head from "next/head";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Fade = require("react-reveal/Fade")

export default function Clients() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);

    if (loading) {
        return (
            <Loading/>
        );
    }

    return (
        <>
        <Head>
            <title>Accounting</title>
            <link rel='icon' href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214"/>
        </Head>
        <Fade>
            <div className='flex h-full flex-col justify-center items-center'>
                <h1 className='text-4xl mb-5 font-bold'>Clients</h1>
                <span className='text-7xl'>💬</span>
            </div>
        </Fade>
        </>
    );
  }