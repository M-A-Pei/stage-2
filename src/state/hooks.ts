import { useContext } from "react"
import { Store } from "."

const useStore = () => { 
    const x = useContext(Store)
    if(!x){
        throw new Error("useStore must be used within a StoreProvider")
    }
    return x
}
export default useStore