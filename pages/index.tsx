import axios from 'axios';
import { NextPage } from 'next';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => { 
  return (
    <h1 className='text-3xl font-bold underline'>
     Hello
    </h1>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get(`http://localhost:3000/api/post`);

  console.log(response.data.name);

  return {
    props: {}
  }
}

export default Home