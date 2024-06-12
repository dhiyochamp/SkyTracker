export const geocode = async (text) => {
    const URL = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(text)}&apiKey=fadf603142b6478ea9da16a04c1d0e30`;
    try {
        const res = await fetch(URL);
        const data = await res.json();

        const arr = [];
        data.features.map(obj => {
            const suburb = obj?.properties?.suburb;
            const city = obj?.properties?.city;
            const state = obj?.properties?.state;
            const country = obj?.properties?.country;

            let curr = `${suburb ? `${suburb}, ` : ''}${city ? `${city}, ` : ''}${state}, ${country}`;
            let objData = {
                label: curr,
                value: {
                    address: curr,
                    lat: obj?.properties?.lat,
                    lon: obj?.properties?.lon,
                }
            };
            arr.push(objData);
        });
        return arr;
    } catch (error) {
        console.log('Error:', error);
        return [];
    }
};

export const reverseGeocode = async (lat, lon) => {
    const URL = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=fadf603142b6478ea9da16a04c1d0e30`;
    try {
        const res = await fetch(URL);
        const data = await res.json();
        if (data?.features?.length > 0) {
            const suburb = data?.features[0]?.properties?.suburb;
            const city = data?.features[0]?.properties?.city;
            const state = data?.features[0]?.properties?.state;
            const country = data?.features[0]?.properties?.country;

            let curr = `${suburb ? `${suburb}, ` : ''}${city ? `${city}, ` : ''}${state}, ${country}`;
            return {
                address: curr,
                lat: data?.features[0]?.properties?.lat,
                lon: data?.features[0]?.properties?.lon,
            };
        } else {
            return null;
        }
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
};
