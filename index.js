// Code your solution in this file!

const hqBlock = 42;
const blockLength = 264;

function distanceFromHqInBlocks (blockNumber) {
    return Math.abs(blockNumber - hqBlock); 
}

function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * blockLength;
}

function distanceTravelledInFeet (start,destination) {
    return Math.abs((destination - start) *  blockLength); 
}

function calculatesFarePrice(start,destination) {
    const fareDistance = distanceTravelledInFeet(start,destination);
    const baseDistance = 400;
    if(fareDistance <= baseDistance) {
        return 0; 
    } else if (fareDistance <= 2000) {
        return (fareDistance - baseDistance) * 0.02;  
    } else if (fareDistance <= 2500) {
        return 25;  
    } else {
        return `cannot travel that far`; 
    }

}