// import Table from 'react-bootstrap/Table';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Image from 'assets/img/avatars/avatar3.png';
// import Button from 'react-bootstrap/Button';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
        <div className='add-Product-btn dark:text-white' > 
        <a href="#"> <button className="btn-dash">Add +</button></a>
         </div>

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>customer Name</Th>
              <Th>Product Name</Th>
              <Th>Product image</Th>
              <Th>Quantity</Th>
              
               <Th>Total amount</Th>
         </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>user</Td>
              <Td>ring</Td>
        <Td><img src={Image} style={{ width: '50px' }} /></Td>
        <Td>2</Td>
        <Td>1000$</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>user</Td>
              <Td>ring</Td>
        <Td><img src={Image} style={{ width: '50px' }} /></Td>
        <Td>2</Td>
        <Td>1000$</Td>
    
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>user</Td>
              <Td>ring</Td>
        <Td><img src={Image} style={{ width: '50px' }} /></Td>
        <Td>2</Td>
        <Td>1000$</Td>
    
            
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
