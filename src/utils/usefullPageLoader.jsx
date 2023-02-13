import React, { useState } from 'react'
import Spinner from '../components/Spinner';

function usefullPageLoader (){

    const [loading,setLoading]= useState(false)
    return [ 
        loading ? <Spinner/>:null,
        () => setLoading(true),
        () => setLoading(false)

    ]
}

export default usefullPageLoader;