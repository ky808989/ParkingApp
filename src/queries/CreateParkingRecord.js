const ParkingRecord = require('../models/parkingRecord');

/**
 * Finds a single artist in the artist collection.
 * @param {object} parkingRecordProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */

 module.exports = (parkingRecordProps) =>{
    const parkingRecord = new ParkingRecord(parkingRecordProps);
    return parkingRecord.save();
 }