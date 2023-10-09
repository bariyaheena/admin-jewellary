// import Table from 'react-bootstrap/Table';
import { Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Image from 'assets/img/avatars/avatar3.png';
// import Button from 'react-bootstrap/Button';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import { color } from '@chakra-ui/system';


const Tables = () => {
  return (
    <div>

      <div className=" mt-10 Hero-section ">
     
        <div className='add-categories-btn dark:text-white' > 
        <a href="#"> <button className="btn-dash">Add category +</button></a>
        </div>

        <Table responsive="md" className=' table-striped dark:text-white  bg-dark Hero-table table'>
          <Thead>
            <Tr >
              <Th>No.</Th>
              <Th>Categoiry Name</Th>
              <Th> Web image</Th>
              <Th>Mobile image</Th>
              <Th>Action</Th>

            </Tr>
          </Thead>
          <Tbody >
            <Tr >
              <Td id="hero-tr">1</Td>
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
        {/* <table class="table Hero-table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
      </div>
    </div>
  );
};

export default Tables;
