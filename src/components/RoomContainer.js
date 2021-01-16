import React from "react";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import {withRoomConsumer} from "../context";
import Loading from "./Loading";

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer);


// import React from "react";
// import RoomsFilter from "../components/RoomsFilter";
// import RoomsList from "../components/RoomsList";
// import {RoomConsumer} from "../context";
// import Loading from "./Loading";
//
// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value;
//
//                     if (loading) {
//                         return <Loading/>
//                     }
//
//                     return (
//                         <div>
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//
//         </RoomConsumer>
//     )
// }
//
// export default RoomContainer;