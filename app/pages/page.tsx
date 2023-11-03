import Image from 'next/image'
import SearchProduct from '../components/searchProduct'

interface Product{
  sku: string;
  productname:string;
  qty: number;

}

export default function Home() {
  return (
    <main ><SearchProduct/>
      <div className=''></div>
      
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>SKU </th>
            <th>IMAGE</th>
            <th>PRODUCT NAME</th>
            <th>QTY</th>
            <th>ACTION</th>
          </tr>
          <tr>
            <td>sss</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>sss</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </table>
    </main>
  )
}
