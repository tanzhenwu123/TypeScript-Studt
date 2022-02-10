import { action, stunt, wisdom } from "../interface/skill";

export function hasStunt(animals:object):animals is stunt{
    if((animals as unknown as stunt).singleFire && (animals as unknown as stunt).doubleFire) return true
    else return false
}
export function hasWisdom(animals:object):animals is wisdom{
    if((animals as unknown as wisdom).stand && (animals as unknown as wisdom).recite) return true
    else return false
}
export function hasAction(animals:object):animals is action{
    if((animals as unknown as action).kongFu) return true
    else return false
}