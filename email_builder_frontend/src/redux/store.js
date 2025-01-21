import {configureStore} from "@reduxjs/toolkit"
import {templateSlice} from "../features/emailTemplate/templateSlice"

export const store = configureStore({
   reducer : {
      emailTemplate : templateSlice
   },
})