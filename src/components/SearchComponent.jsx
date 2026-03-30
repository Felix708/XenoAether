import { TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function SearchComponent({ processSearch }) {
    return (
        <div className="mx-6 w-6xl">
            <TextInput id="email4" type="email" icon={IoIosSearch} placeholder="Search game..." required onKeyUp={(event) => processSearch(event)} />
        </div>
    )
}