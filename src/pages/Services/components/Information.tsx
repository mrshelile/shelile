import { Avatar, Card } from 'flowbite-react'
import './information.css'
import Help from '../../../assets/help.svg'
import Product from './Service'
import { productSet } from '../constants/ServiceSet'
import  Iproduct  from '../Interfaces/Iservice'
export default function Information() {
  return (
    <div className="topDiv p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4">
              <div>
                  <img src={Help} width="70%" className='ml-20'/>
              </div>             
              <div >
                  <h3 className='text-start text-4xl text-cyan-600 font-bold mt-2'>Services</h3>
                  <p className='mt-5'>
                    From customization to full-cycle development services, i deliver reliable and cost-effective software solutions.Incase your computer gives you problems ,hardware or software ,contact me urgently to help you out with affordable prices.
                  </p>    
              </div>
              {productSet.map((productItem:Iproduct) => {
                  return (
                      <div className='mt-10'>
                          <Product service={ productItem} />
                      </div>
                  );
              })}  
        </div>
    </div>
  )
}
