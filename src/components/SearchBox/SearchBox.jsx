import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"
import css from "./SearchBox.module.css"
export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    return (
        <div className={css.container}>
            <label htmlFor="search">Find contacts by name</label>
            <input id="search" type="text" value={filter}  onChange={(e) => dispatch(changeFilter(e.target.value))}/>
        </div>
    )
}