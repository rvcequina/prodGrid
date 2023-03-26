


const BaseModal = ({children}) =>{


    return(
       <>
        <div className="modal-container">
            <div className="modal-card">
                {children}
            </div>
          
        </div>
       </>
    )
}

export default BaseModal