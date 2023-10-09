
import Image from 'assets/img/avatars/avatar3.png';

import Dropdown from 'react-bootstrap/Dropdown';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">

      <Dropdown>
      <Dropdown.Toggle variant="success" className='add-categories-btn' id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Accept</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Reject</Dropdown.Item>
        <Dropdown.Item href="#/action-3">ReSubmission</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        {/* <div className='add-categories-btn dark:text-white' > <Button variant="primary">Add Produst +</Button></div> */}
        <Table responsive="md" className='table mt-20  table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Product Name</Th>
              <Th>Product image</Th>
              <Th>Reviewer</Th>
              <Th>Review</Th>
              <Th>Date</Th>
            
         </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ring</Td>
              <Td><img src={Image}  style={{ width: '50px' }} /></Td>
        <Td>customer name</Td>
              <Td>I just love it</Td>
              <Td>Aug 17, 2020, 5:48</Td>
        
            
            </Tr>
            <Tr>
            <Td>1</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
        <Td>customer name</Td>
              <Td>I just love it</Td>
              <Td>Aug 17, 2020, 5:48</Td>
    
            </Tr>
            <Tr>
            <Td>1</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
        <Td>customer name</Td>
              <Td>I just love it</Td>
              <Td>Aug 17, 2020, 5:48</Td>
            
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
