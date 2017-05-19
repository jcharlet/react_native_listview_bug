
export const loadRidesByDeviceId = () => {
    return Promise.resolve(JSON.parse('[{"id":"g.103.2017-05-19T16:03:02+01:00","deviceId":103,"date":"2017-05-19T16:03:02+01:00","analytics":{}},{"id":"g.103.2017-05-19T16:04:03+01:00","deviceId":103,"date":"2017-05-19T16:04:03+01:00","analytics":{}}]'))
}
export const removeRide = (date: string) => {
    return Promise.resolve();
}

