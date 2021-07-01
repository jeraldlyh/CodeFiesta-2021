import { insertTips } from "./actions/Tips"
import tipsData from "./data/tips.json";

export const loadData = () => {
    tipsData.forEach(data => insertTips(data));
}