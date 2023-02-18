import { getItem, setItem } from "./storage";
export default function checkIfRender(elementName, frequency, timeFrequency){
    const currentValue = getItem(elementName);

    if(!currentValue){
        setItem(elementName, {count: 1, time: Date.now()})
        return true;
    }else{
        const {count, time} = currentValue;
        if(count < frequency){
            setItem(elementName, {...currentValue, count: count+1})
            return true;
        }

        const timePassed = time - Date.now();
        if(timePassed/(60*60*1000) > timeFrequency){
            setItem(elementName, {count: 1, time: Date.now()})
            return true;
        }
    }

    return false;
}