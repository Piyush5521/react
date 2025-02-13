import './Display.css';

const Display = ({displayvalue}) => {
    return (
        <>
            <div className="displayScreen">
                <input className="displayInput" type="text" value={displayvalue}  readOnly />
            </div>
        </>
    );
}

export default Display;