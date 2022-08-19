// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    let distanceFromHqInBlocks=pickUpLocation>42?pickUpLocation-42:42-pickUpLocation;
    // return (pickUpLocation - 42);
    return distanceFromHqInBlocks;
};

function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation)*264;
};
function distanceTravelledInFeet(start,finish){
    let distanceTravelledInFeet=start>finish?start-finish:finish-start;
    return distanceTravelledInFeet*264;
};
function calculatesFarePrice(start,destination){
    let distanceTravelledInFeet=start>destination?(start-destination)*264:(destination-start)*264
    if (distanceTravelledInFeet<400){
        return 0}
        else if(distanceTravelledInFeet>400 && distanceTravelledInFeet<2000){
            return 0.02*(distanceTravelledInFeet-400);
        }else if(distanceTravelledInFeet>2000 && distanceTravelledInFeet<2500){
            return 25;
        }else{
            return 'cannot travel that far'
        }
}