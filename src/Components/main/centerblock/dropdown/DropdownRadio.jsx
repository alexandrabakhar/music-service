export const DropdownRadio = () => {
    return (
        <div className="dropdown__radio-div">
            <input
                type="radio"
                id="new"
                name="years"
                value="Более новые"
            ></input>
            <label htmlFor="new">Более новые</label>

            <input
                type="radio"
                id="old"
                name="years"
                value="Более старые"
            ></input>
            <label htmlFor="old">Более старые</label>
        </div>
    );
};
