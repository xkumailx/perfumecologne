import React from 'react'

const FooterCopyright = () => {
  return (
    <div className='bottom-bar'>
        <div className="container">
            <div className="flex-row">
                <div className="col-6">
                    <p>Copyright {new Date().getFullYear()} © PERFUMENCOLOGNE.COM</p>
                </div>   
                <div className="col-6">
                
                </div> 
            </div>               
        </div>
    </div>
  )
}

export default FooterCopyright