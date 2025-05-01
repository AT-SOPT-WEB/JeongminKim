import { useState } from "react";
import { members } from "../mock/member";

const useSearch = () => {
    const [search, setSearch] = useState("");
    const [filteredMembers, setFilteredMembers] = useState(members);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        if (search.trim() === "") {
            setFilteredMembers(members);
        } else {
            const filtered = members.filter((member) => member.name.includes(search));
            setFilteredMembers(filtered);
        }
    };

    return { search, filteredMembers, handleSearchChange, handleSearch };
};

export default useSearch;
