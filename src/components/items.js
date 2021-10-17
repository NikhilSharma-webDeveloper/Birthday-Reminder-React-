import React from "react";

export const Items = ({ list }) => {
    console.log(list)
    return (<ul id="bithdayList">
        {
            list.map(({ id, name, age, image }) => {
                return (
                    <li key={id}>
                        <section>
                            <img src={image} alt={name}></img>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} Years</p>
                            </div>
                        </section>
                    </li>)
            })
        }

    </ul >);
}