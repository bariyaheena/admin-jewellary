// import Table from 'react-bootstrap/Table';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Image from 'assets/img/avatars/avatar3.png';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
        <div className='add-Product-btn dark:text-white' > 
       <a> <button className="btn-dash">Add category +</button></a>
        
        </div>

       
        <Table responsive="md" className=' table-striped Hero-table dark:text-white bg-dark table'>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Product Name</Th>
              <Th>Mobile image</Th>
              <Th>Web image</Th>
              <Th>Stock</Th>
              <Th>New Arrival</Th>
              <Th>Best seller</Th>
             <Th>Category</Th>
              <Th>Price</Th>
              <Th>Discount</Th>
              <Th>Product-Price(dis.)</Th>
              <Th>Festival Product</Th>
         </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td>500</Td>
              <Td><input type="checkbox" className='check'/></Td>
              <Td><input type="checkbox" className='check'/></Td>
              <Td>Men</Td>
              <Td>100</Td>
              <Td>10%</Td>
              <Td>90</Td>
              <Td><BootstrapSwitchButton className="festival-btn" checked={true} onstyle="success" offstyle="danger" style="border" /></Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td>500</Td>
              <Td><input type="checkbox" className='check'/></Td>
              <Td><input type="checkbox" className='check'/></Td>
              <Td>Men</Td>
              <Td>100</Td>
              <Td>10%</Td>
              <Td>90</Td>
              <Td><BootstrapSwitchButton className="festival-btn" checked={true} onstyle="success" offstyle="danger" style="border" /></Td>
    
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Earrings</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td>500</Td>
              <Td><input type="checkbox" className='check'/></Td>
              <Td><input type="checkbox" className='check'/></Td>
              <Td>Men</Td>
              <Td>100</Td>
              <Td>10%</Td>
              <Td>90</Td>
              <Td><BootstrapSwitchButton className="festival-btn" checked={true} onstyle="success" offstyle="danger" style="border" /></Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
