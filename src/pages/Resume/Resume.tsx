import dev3 from '../../assets/dev3.svg'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
export default function Resume() {
  return (
    <div className="flex-col ml-20 mt-5 overflow-auto h-auto mb-20" >
      <div className="grid grid-cols-2 gap-1">
        <div className=''>
          <img src={dev3} width="70%" />
        </div>
        <div>
         <Education/>
        </div>    
        
      </div>
      <div className='mt-10'>
        <div className="grid grid-cols-2 gap-1">
          <div>
            <Skills/>
          </div>
          <div>
          <Experience/>
          </div>
    
        </div>
      </div>
    </div>

  )
}
