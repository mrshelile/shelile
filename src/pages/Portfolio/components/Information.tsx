import { Avatar, Card } from 'flowbite-react'
import './information.css'
import Shop from '../../../assets/shop.svg'
import Product from './Product'
import { productSet } from '../constants/ProductSet'
import  Iproduct  from '../Interfaces/Iproduct'
export default function Information() {
  return (
    <div className="topDiv p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-2 gap-4">
              <div>
                  <img src={Shop} width="70%" className='ml-20'/>
              </div>             
              <div >
                  <h3 className='text-start text-4xl text-cyan-600 font-bold mt-2'>Portfolio</h3>
                  <p className='mt-5'>
                      I do believe it is important to be future-ready with a portfolio to be able to deal with however the market evolves. This is better than just forecasting accurately but in having the weapons ready to deal with the uncertainties.
                  </p>    
              </div>
              {productSet.map((productItem:Iproduct) => {
                  return (
                      <div className='mt-10'>
                          <Product product={ productItem} />
                      </div>
                  );
              })}  
        </div>
    </div>
  )
}
