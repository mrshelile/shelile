import { Avatar, Card } from 'flowbite-react'
import './information.css'
import Me from '../../../assets/me.jpg'
export default function Information() {
  return (
    <div className="topDiv p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <img className="w-10 h-10 rounded-full" src={Me} alt="Rounded avatar"/>
        <a >
            <h5 className="mb-2 mt-2 text-4xl font-semibold tracking-tight text-teal-500 dark:text-white">About Malefetsane Shelile</h5>
        </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Skilled in Mobile Application Development,Websites Application Development and Desktop Application Development, User Experience Design (UED. IT Technician with a Diploma in Computer systems Engineering focused in Computer Systems from Lerotholi Politechnic.Worked as IT Technician (Intern) 6 months at lerotholi Polytechnic and worked at Mothae Diamonds Lesotho as IT Technician (Intern) for 10 months
          </p>
        <a >
            <h5 className="mb-2 mt-2 text-center text-2xl font-semibold tracking-tight text-cyan-500 dark:text-white">Software Developer Or IT Technician</h5>
        </a>
          <p>
              <div className=" grid grid-cols-2 gap-42">
                  <div>   
                    <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div className="flex flex-col pb-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Birthday</dt>
                            <dd className="text-lg font-semibold">12 December 1999</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone</dt>
                            <dd className="text-lg font-semibold">+(266) 6935 6845</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Physical Address</dt>
                            <dd className="text-lg font-semibold">Ha Shelile Maseru Lesotho</dd>
                        </div>
                    </dl>
                  </div>
                  
                  <div>
                      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div className="flex flex-col pb-3">
                              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">  Highes Qualification</dt>
                            <dd className="text-lg font-semibold">Diploma in Computer Systems</dd>
                        </div>
                        <div className="flex flex-col py-3">
                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email Address</dt>
                            <dd className="text-lg font-semibold">davertzshelile@gmail.com</dd>
                        </div>
                     
                    </dl>
                  </div>
                  
              </div>
              
          </p>  
        <a href="https://wa.me/+26669356845?text=I'm%20interested%20in%20your%20portfolio" className="inline-flex items-center text-blue-600 hover:underline">
            Whatsapp Text
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
    </div>
  )
}
