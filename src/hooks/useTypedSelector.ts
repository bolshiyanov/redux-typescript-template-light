import {TypedUseSelectorHook, useSelector} from "react-redux";
import { RootState } from "../store/redicers";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector