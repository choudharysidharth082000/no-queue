import React from 'react';
import NoteOrder from "./NoteOrder"
import {viewData} from "./ViewData"

function ViewOrder() {
    return (
        <div>
            {/* <AmulProduct heading="Welcome to Amul" data={amulData}/> */}
            <h1>VIEW ORDER</h1>
            {viewData.map((note, index)=>{
                return <NoteOrder items={note.order.items} qt={note.order.qt} total={note.order.total} name={note.name} phone={note.phone} />;
            })}

        </div>
    )
}

export default ViewOrder;
