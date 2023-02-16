import { Button } from 'flowbite-react'
import dev2 from '../../assets/dev2.svg'
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className='col-span-1'>
          <div className="grid grid-rows-3 grid-flow-col gap-5 mt-24 ml-20">
            <div className='text-4xl font-semibold '>
              <span className='text-cyan-500'>Hi,</span> i'm Malefetsane Shelile
              but you can call me by my last name.
            </div>
            <div className='text-xl font-light'>
              <span className='text-cyan-500'> I am</span> the most passionate <span className='text-cyan-500'>Computer engineer</span> you will ever work with. If you have a great project
              that needs  <span className='text-cyan-500'>amazing skills</span>, I'm your guy.
            </div>
            <div>
              <Button className='uppercase' outline={true} gradientDuoTone="cyanToBlue" pill={true}
              >My Portfolio
              </Button>
             </div>
          </div>
        </div>
        <div className='col-span-1'>
          <img src={dev2} width="90%" />
        </div>
      </div>
    </div>
  )
}
