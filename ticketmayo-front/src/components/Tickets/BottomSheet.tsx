
import { useState } from "react";
import Sheet from "react-modal-sheet";

interface Idata {
  value: boolean;
  setValue: Function;
  ticketId: Number; 
  // ticket: {
  //     id: number;
  //     title: string;
  //     open: string;
  //     playLoc: string;
  //     grade: string;
  //     img: string;
  //     price: string;
  //     cnt: number;
  // }[];
}



function BottomSheet(props: Idata) {
  

  const ticketId = props.ticketId;

  function setOpen() {
    props.setValue(false);
  }

  return (
    <>
        
    

          <Sheet isOpen={props.value} onClose={setOpen} snapPoints={[0.5]}>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <>
                클릭한 ticketId : {ticketId}
              </>
            </Sheet.Content>
          </Sheet.Container >
          <Sheet.Backdrop/>
        </Sheet>

         
        
    </>
  );
}

export default BottomSheet;