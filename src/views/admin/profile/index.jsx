// import Banner from "./components/Banner";
// import General from "./components/General";
// import Notification from "./components/Notification";
// import Project from "./components/Project";
// import Storage from "./components/Storage";
// import Upload from "./components/Upload";
import Image from 'assets/img/avatars/avatar3.png';

const ProfileOverview = () => {
  return (

           
          <div className='container mt-10'>
             <div className="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center profile-page">
           <img src={Image}/>
            <h5 class="my-3">John Smith</h5>
            <p class=" mb-1">Full Stack Developer</p>
            <p class="mb-4">Bay Area, San Francisco, CA</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">Follow</button>
              <button type="button" class="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
          </div>

          <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body profile-page">
            <div className="row mt-5">
              <div className="col-sm-3 ">
                <p className="mb-0 ">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="mb-0 text-white">Johnatan Smith</p>
              </div>
            </div>
            <hr/>
            <div className="row mt-5">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className=" mb-0 ">example@example.com</p>
              </div>
            </div>
            <hr/>
            <div className="row mt-5">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className=" mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div className="row mt-5">
              <div className="col-sm-3">
                <p class="mb-0">Mobile</p>
              </div>
              <div class="col-sm-9">
                <p class="mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr/>
            <div class="row mt-5">
              <div class="col-sm-3">
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class=" mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      
    </div>
  

 
  );
};

export default ProfileOverview;
