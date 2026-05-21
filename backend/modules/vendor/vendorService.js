import vendors from "./vendors.json" with { type: "json" };

const getAllVendors = async () => {
    return vendors;
};

const filterVendors = async ({
    city,
    category
}) => {

    let filteredVendors = [...vendors];

    if (city) {
        filteredVendors = filteredVendors.filter(
            (vendor) =>
                vendor.city.toLowerCase() ===
                city.toLowerCase()
        );
    }

    if (category) {
        filteredVendors = filteredVendors.filter(
            (vendor) =>
                vendor.category.toLowerCase() ===
                category.toLowerCase()
        );
    }

    return filteredVendors;
};

export {
    getAllVendors,
    filterVendors
};