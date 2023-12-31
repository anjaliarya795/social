import { topics } from '@/utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Discover = () => {

  const router = useRouter();
  const {topic} = router.query;

  const activeTopicStyle = "xl:border-2 hover:bg-gray-100 xl:border-[#F51997] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#FF1997]"

  const topicStyle = "xl:border-2 hover:bg-gray-100  xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black"

  return (
    <div  className='xl:border-b-2 xl:border-gray-200 pb-6'>
        <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
          Popular Topics 
        </p>

        <div className="flex gap-3 flex-wrap justify-center xl:justify-stretch">

          {topics.map((item) => (

            <Link href={`/?topic=${item.name}`} key={item.name}>
              <div className={topic === item.name ? activeTopicStyle : topicStyle}>
                <span className='font-bold text-lg'>
                  {item.icon}
                </span>
                <span className='font-light text-xs hidden xl:block capitalize'>
                  {item.name}
                </span>
              </div>
            </Link>

          ))}
        </div>
    </div>
  )
}

export default Discover
