// import Table from 'react-bootstrap/Table';
import Image from 'assets/img/avatars/avatar3.png';
import Button from 'react-bootstrap/Button';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';



const Tables = () => {
  return (
    <div className='container'>

      <div className="row mt-10 Hero-section ">
     
        <div className='add-categories-btn dark:text-white' >
        <a href="#"> <button className="btn-dash">ADD Category +</button></a> 
        </div>

        <Table responsive="md" className='table table-striped Hero-table dark:text-white bg-dark '>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Categoiry Name</Th>
              <Th> Web image</Th>
              <Th>Mobile image</Th>
              <Th>Action</Th>

            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
            <Td>
            <button type="button" class="btn btn-primary">Edit</button>
            <button type="button" class="btn btn-primary">View</button></Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><button type="button" class="btn btn-primary">View</button>
              <button type="button" class="btn btn-primary">Edit</button>
              </Td>
        
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Ring</Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><img src={Image} style={{ width: '50px' }} /></Td>
              <Td><button type="button" class="btn btn-primary">View</button>
              <button type="button" class="btn btn-primary">Edit</button>
              </Td>
          
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tables;
