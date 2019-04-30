class Api {

    async getData() {
        // await response of fetch call
        const response = await fetch('https://eatstreet.com/publicapi/v1/a94289453acb0793da325d7782b35bdbb8ca9387fe77fac5')
        // only proceed once promise is resolved
        return await response.json();

    }
}

// const response = await fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson');
export default new Api();
