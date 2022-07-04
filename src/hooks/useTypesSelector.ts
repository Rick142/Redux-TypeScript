//Хук useSelector для работы с типами

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

//RootState - тип, с которым работаем наш кастомный хук
export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector