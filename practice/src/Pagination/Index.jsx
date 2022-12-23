import React,{ useState} from 'react'
import {useSwr} from 'swr'


const Index = () => {

    const pageNumberLimit = 10;

    const [currentPage,setCurrentPage] = useState(1)
    const [maxPageLimit, setMaxPageLimit] = useState(10);
    const [minPageLimit, setMinPageLimit] = useState(0);
  return (
    <div>Index</div>
  )
}

export default Index