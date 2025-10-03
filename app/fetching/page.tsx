//https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain 


import React from 'react'
import axios from 'axios'



const fetchingHomeTest = async () => {

    const randomWord = await axios ('https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain ')

    // print raw data
    const data = randomWord.data

    // sort array alphabetically
    const dataArraySorted = data.split('\n').sort((a: string, b: string) => a.localeCompare(b))

  return (
    <div>
        <h1 className='text-8xl'>Hello Purwadika Student !</h1>
        <p>{data}</p>
        <p>{dataArraySorted}</p>

    </div>
  )
}

export default fetchingHomeTest
