// import Table from 'react-bootstrap/Table';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import Image from 'assets/img/avatars/avatar3.png';
import Button from 'react-bootstrap/Button';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
     
        <div className='add-categories-btn dark:text-white' > <Button variant="primary">Add Categories +</Button></div>

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Category</Th>
              <Th>(in)Stock</Th>
              <Th>(out)Stock</Th>
              <Th>total Stock</Th>
              <Th>Action</Th>

            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ring</Td>
              <Td>100</Td>
              <Td>90</Td>
              <Td>10</Td>
              <Td>--</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Ring</Td>
              <Td>90</Td>
              <Td>90</Td>
              <Td>0</Td>
              <Td style={{color:"red"}}>Out of stock</Td>
            </Tr>
           
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
