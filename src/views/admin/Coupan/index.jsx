// import Table from 'react-bootstrap/Table';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
        <div className='add-Product-btn dark:text-white' >
        <a href="#"> <button className="btn-dash">Add Coupan +</button></a>
        </div>

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Title</Th>
              <Th>CoupanCode</Th>
              <Th>Discount</Th>
              <Th>Status</Th>
              <Th>start Date</Th>
              <Th>Enad Date</Th>
              <Th>Action</Th>
         </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>WelCome offer</Td>
              <Td>#f2323</Td>
              <Td>50%</Td>
              <Td><input type="checkbox" className='check'/>active</Td>
              <Td>--</Td>
              <Td>--</Td>
    <Td>edit/delete</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>birthday offer</Td>
              <Td>#f2323</Td>
              <Td>50%</Td>
              <Td><input type="checkbox" className='check'/>active</Td>
              <Td>--</Td>
              <Td>--</Td>
              <Td>edit/delete</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>WelCome offer</Td>
              <Td>#f2323</Td>
              <Td>50%</Td>
              <Td><input type="checkbox" className='check'/>active</Td>
              <Td>--</Td>
              <Td>--</Td>
              <Td>edit/delete</Td>
            
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
