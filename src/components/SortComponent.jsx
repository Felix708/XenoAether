import { Dropdown, DropdownItem } from "flowbite-react";

export default function SortDropdown({ sortGames }) {
    return (
        <div className="">
            <Dropdown label="Sort By" color="alternative" dismissOnClick={false}>
                <DropdownItem onClick={() => sortGames("MostCheap")}>Most Cheapest</DropdownItem>
                <DropdownItem onClick={() => sortGames("MostExpensive")}>Most Expensive</DropdownItem>
                <DropdownItem onClick={() => sortGames("Ascending")}>Ascending Alphabet</DropdownItem>
                <DropdownItem onClick={() => sortGames("Descending")}>Descending Alphabet</DropdownItem>
            </Dropdown>
        </div >
    )
}