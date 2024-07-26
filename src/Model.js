import './component.css';


export default function Model({isVisibleSub, errorMessage = null}) {



    if (isVisibleSub) {
        return(
            <div className="model flex" >
                <div className="model-content">
                    {/* <h2>The Form Has Been Submitted Succssfuly</h2> */}
                    <h2 style={{color:errorMessage? "red" : "green" }} >{errorMessage != null ? errorMessage :"The Form Has Been Submitted Succssfuly"}</h2>
                </div>
            </div>
        )

    }
    else {
        return(
            <></>
        )
    }
   
}