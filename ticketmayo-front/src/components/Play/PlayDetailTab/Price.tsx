import { useOutletContext } from "react-router-dom";

interface IPlayId {
    playId: number;
  }
  
  
function Price() {

    const {playId} = useOutletContext<IPlayId>();
    console.log(playId);

    return (
        <>   
            <h1>price {playId}</h1>
        </>
    );
};

export default Price;