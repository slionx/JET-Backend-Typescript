import { TweatherSingle } from "./single.type";

export type TweatherAll = {
    fog?: TweatherSingle,
    heavyclouds?: TweatherSingle,
    heavyrain?: TweatherSingle,
    lightclouds?: TweatherSingle,
    lightrain?: TweatherSingle,
    storm?: TweatherSingle,
    sun?: TweatherSingle,
    thunder?: TweatherSingle,
    wind?: TweatherSingle
}