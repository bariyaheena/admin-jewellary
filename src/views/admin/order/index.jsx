// import Table from 'react-bootstrap/Table';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import Image from 'assets/img/avatars/avatar3.png';
// import Button from 'react-bootstrap/Button';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
        {/* <div className='add-categories-btn dark:text-white' >

          </div> */}

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Product Id</Th>
              <Th>Product Name</Th>
              <Th>Name</Th>
              <Th>Date</Th>
              <Th>Email</Th>
              <Th>order status</Th>
              <Th>Total</Th>
              
         </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>#0000</Td>
              <Td>Ring</Td>
              <Td>custumer</Td>
              <Td>10/9/2023</Td>
              <Td>custumer@gmail.com</Td>
              <Td style={{color:"green"}}>Delivered</Td>
             <Td>1000</Td>
            
            
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>#0000</Td>
              <Td>Ring</Td>
              <Td>custumer</Td>
              <Td>10/9/2023</Td>
              <Td>custumer@gmail.com</Td>
              <Td style={{color:"red"}}>pedding</Td>
             <Td>1000</Td>
              
    
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>#0000</Td>
              <Td>Ring</Td>
              <Td>custumer</Td>
              <Td>10/9/2023</Td>
              <Td>custumer@gmail.com</Td>
              <Td style={{color:"blue"}}>Shipped</Td>
             <Td>1000</Td>
            
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
