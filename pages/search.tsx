import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Fade = require("react-reveal/Fade")

export default function Search() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const formData = router.query.input;

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
            <div className='flex h-full w-full flex-col justify-center items-center'>
                <h1 className='lg:text-4xl text-2xl mb-5 font-bold'>Seach results for...</h1>
                <h2 className='header'> {formData}</h2>
            </div>
        </Fade>
        </>
    );
  }