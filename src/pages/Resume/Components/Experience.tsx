import { experienceSet } from '../constants/ExperienceSet'

export default function Experience() {
  return (
    <div>
      <h2 className="mb-2 text-4xl text-cyan-600  font-bold mt-2">Professional Experience:</h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
        {experienceSet.map((item,i) => {
          return (
            <li>
            <p className='mt-5'>
                <h4 className=' text-lg font-semibold '>{i + 1}. {item.company }</h4>
            <div className='text-center w-auto bg-neutral-200 text-cyan-500 font-bold ml-4 mt-2'>
            {item.title}  {item.start_year} - {item.end_year} ({item.duration} Months)
            </div>
            <ul className="max-w-md space-y-1 ml-10 text-gray-500 list-disc list-inside dark:text-gray-400">
                  {item.duties.map((element) => {
                    return (
                      <li>{element}</li>
                    );
                })}
            </ul>    
          </p>
            </li>
          );
           })}
          </ul>
    </div>
  )
}
