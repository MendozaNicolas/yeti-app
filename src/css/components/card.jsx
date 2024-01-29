import React from "react";

export default function Card(props) {
    return (
        <div class="card shadow">
            <div class="card-img"><img src={`${props.src}`} /></div>
            <div class="card-info">
                <p class="text-title"> {`${props.title}`} </p>
                <p class="text-body">{`${props.desc}`}</p>
            </div>
            <div class="card-footer">
                <div class="card-button">
                    Comprar
                </div>
            </div>
        </div>
    );
}