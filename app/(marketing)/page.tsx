import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heading } from './_components/heading'
import { Heroes } from './_components/heroes'
import { Footer } from './_components/footer'
// import MarketingLayout from './(marketing)/marketinglayout'


const MarketingPage=() =>{
  return (
    <div className='min-h-full flex flex-col'>
      
      <div className='flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1F1F1F]'>
        <Heading/>
        <Heroes/>

      </div>
      <Footer/>
      
    </div>
    
    
  )
}
export default MarketingPage;
