/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useRef, useState} from 'react';

import axios from 'axios'
export default function useProductGrid(pageNumber) {

    const [productList,setProductList]=useState([])
    const [isVisible,setVisible] = useState(false)
    const [showLoading,setShowloading] = useState(true)
    const [error, setError] = useState(false)
   
   

    useEffect(() => {
        setShowloading(true)
        setError(false)
        let cancel
        axios({
          method: 'GET',
          url: 'http://localhost:8000/products',
          params: { _page: pageNumber,_limit:15 },
          cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setProductList(prevData => {
            return [...new Set([...prevData, ...res.data])]
          })
          setVisible(res.data.length > 0)
          setShowloading(false)
        }).catch(e => {
          if (axios.isCancel(e)) return
          setError(true)
        })
        return () => cancel()
      }, [pageNumber])
    
      return { showLoading, error, productList, isVisible }
    
   
}
