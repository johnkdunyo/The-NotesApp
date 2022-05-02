import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">About</li>
                        <li className="list-inline-item">Privacy and Terms</li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    <span className="text-secondary mr-1">2022 ©</span>  <span className='text-info'>The NotesApp.</span>
                </div>
            </div>
        </div>
    </footer>
    </React.Fragment>
  )
}

export default Footer