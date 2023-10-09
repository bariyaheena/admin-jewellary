// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
     
        {/* <div className='add-categories-btn dark:text-white' > <Button variant="primary">Add Categories +</Button></div> */}

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Product Id</Th>
              <Th>Customer Name</Th>
              <Th>Customer email</Th>
              <Th>payment Type</Th>
              <Th>status</Th>

            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>#11111</Td>
              <Td>Post</Td>
              <Td>post@mail.com</Td>
              <Td style={{color:"green"}}>cash on dilevery</Td>
              <Td style={{color:"red"}}>pedding</Td>
            </Tr>
            <Tr>
            <Td>2</Td>
              <Td>#11111</Td>
              <Td>Post</Td>
              <Td>post@mail.com</Td>
              <Td style={{color:"green"}}>cash on dilevery</Td>
              <Td style={{color:"red"}}>pedding</Td>
            </Tr>
           
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
