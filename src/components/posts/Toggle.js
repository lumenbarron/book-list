import React from 'react';
import {connect} from 'react-redux';

export const OneComponent = ({show, onClick}) => {
    return show ?  (
        <div>
        aqui se ve algo bueno
        <button onClick={onClick}>Arre</button>
        </div>
    ) : null
}

const mapStateToProps = (state) => ({
    show : state.showMyComponent
});

const mapDispatchToProps = (dispatch) => {
    onClick : () => dispatch ({
        type : 'show' , payload : false
    })
}

export default connect (mapStateToProps , mapDispatchToProps)(OneComponent);

//Reducer
const initialState = { 
    showMyComponent : false,
    showOtherComponent : false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'show' :
            return {...state, showMyComponent: action.payload};
        case 'hide' :
            return {...state, showOtherComponent : action.payload};
        default :
            return state;
    }
}

// export const OneComponent = ({onClick}) => {
//     return (
//         <div>
//             aqui se ve algo
//             <button onClick={onClick}>Arre</button>
//         </div>
//     )
// }