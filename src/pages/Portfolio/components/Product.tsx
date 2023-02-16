import { useTheme } from '@mui/material/styles';
import { Button } from 'flowbite-react';
import Iproduct from '../Interfaces/Iproduct';
type Props ={product:Iproduct}
export default function Product(props:Props) {
    const theme = useTheme();
    return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="">
              <img className="p-8 rounded-t-lg" src={props.product.image} alt="product image" width="50%" />
          </a>
          <div className="px-5 pb-5">
              <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.product.name }</h5>
              </a>
              <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{props.product.created }</span>
                  <Button outline={true} gradientDuoTone="cyanToBlue">
                      View
                  </Button>     
              </div>
          </div>
      </div>
    );
}
