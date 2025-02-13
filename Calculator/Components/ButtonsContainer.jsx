import './Btncalc.css';
import './Display.css'

const ButtonsContainer = ({onButtonClick}) => {

    
    const buttonNames = ['c', '1', '2', '+', '3', '4', '-', 5, 6, '*', 7, 8, '/', '9', '0', '.', '=',];
    return(
        <>
            <div className="btncalc">
                {buttonNames.map((buttonNames)=>(
                    <button className='singlebtn' onClick={()=> onButtonClick(buttonNames)}>
                         {buttonNames}
                    </button>
                ))} 
            </div>
        </>
    );
}

export default ButtonsContainer;