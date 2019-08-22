export const createProjectAction = (project) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({
            type: 'create_project',
            project
        })
    }
}

export const notificationsList = (notification) => {
    return (dispatch, getState) => {
        dispatch({
            type: 'create_notification',
            notification
        })
    }
}