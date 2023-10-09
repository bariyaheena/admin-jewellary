// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Tables = () => {
  return (
    <div>

      <div className=" mt-20 Hero-section ">
        {/* <div className='add-categories-btn dark:text-white' > <Button variant="primary">Add Produst +</Button></div> */}

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>First Name</Th>
              <Th>Middle Name</Th>
              <Th>Surname Name</Th>
              <Th>BirThDate</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Address</Th>
              <Th>City</Th>
              <Th>Country</Th>
              <Th>State</Th>
              <Th>Pincode</Th>
              <Th>Action</Th>
             </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
             <Td>Astha</Td>
             <Td>Ram </Td>
             <Td>Shah</Td>
             <Td>Aug 17, 2020</Td>
             <Td>customer@gmail.com</Td>
             <Td>1234567689</Td>
             <Td>Bopal</Td>
             <Td>ahmdabad</Td>
             <Td>India</Td>
             <Td>gujarat</Td>
             <Td>090291</Td>
        <Td><Button variant="primary">View</Button></Td>
            </Tr>
            <Tr>
            <Td>2</Td>
             <Td>Astha</Td>
             <Td>Ram </Td>
             <Td>Shah</Td>
             <Td>Aug 17, 2020</Td>
             <Td>customer@gmail.com</Td>
             <Td>1234567689</Td>
             <Td>Bopal</Td>
             <Td>ahmdabad</Td>
             <Td>India</Td>
             <Td>gujarat</Td>
             <Td>090291</Td>
             <Td><Button variant="primary">View</Button></Td>
            </Tr>
            <Tr>
            <Td>3</Td>
             <Td>Astha</Td>
             <Td>Ram </Td>
             <Td>Shah</Td>
             <Td>Aug 17, 2020</Td>
             <Td>customer@gmail.com</Td>
             <Td>1234567689</Td>
             <Td>Bopal</Td>
             <Td>ahmdabad</Td>
             <Td>India</Td>
             <Td>gujarat</Td>
             <Td>090291</Td>
             <Td><Button variant="primary">View</Button></Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
