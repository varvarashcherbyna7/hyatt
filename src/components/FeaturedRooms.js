import React from 'react';
import {RoomContext} from "../context";
import Title from "./Title";
import Room from "./Room";

class FeaturedRooms extends React.Component {

    static contextType = RoomContext

    render() {
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <Title title={"Featured rooms"}/>
                <div className="featured-rooms-center">
                    { loading? "<Loading/> " : rooms }
                </div>
            </section>
        )
    }
}

export default FeaturedRooms;