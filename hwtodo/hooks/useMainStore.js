import React from 'react'
import {storesContext} from "../stores/MainStore";

export const useMainStore = () => React.useContext(storesContext)