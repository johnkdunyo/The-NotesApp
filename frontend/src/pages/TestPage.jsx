import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const onButtonClick =() =>{
    console.log('button clicked')
    MySwal
    .fire({
        title: <p>You Clicked me</p>,
        didOpen: () =>{
            MySwal.showLoading()
        },
    })
    .then(()=>{
        return MySwal.fire(<p>Okay i am dismissing it</p>)
    })
};

const onClickDelete = () => {
    MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f674ad',
        cancelButtonColor: '#8ac3a3',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

const TestPage = () => {
  return (
    <React.Fragment>
        <div className='container-fluid p-5 row'>
            <div className='d-flex align-items-center justify-content-between'>
            <button className='btn btn-dark m-3' onClick={onButtonClick}>Click me</button>
            <button className='btn btn-purple m-3' onClick={onClickDelete} >Delete Button</button>
            </div>
        </div>
    </React.Fragment>
  )
}

export default TestPage;
