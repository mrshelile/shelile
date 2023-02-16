import { useTheme } from '@mui/material/styles';
import Iproduct from '../Interfaces/Iservice';
import dev4 from '../../../assets/dev1.svg'
type Props ={service:Iproduct}
export default function Product(props:Props) {
    const theme = useTheme();
    return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="">
              <img className="p-8 rounded-t-lg" src={dev4} alt="product image" width="50%" />
          </a>
          <div className="px-5 pb-5">
              <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-cyan-500 ">{props.service.name }</h5>
              </a>
              <div className="flex items-center justify-between">
                  <span className=" text-gray-900 dark:text-white">{props.service.description }</span>
              </div>
          </div>
      </div>
    );
}
