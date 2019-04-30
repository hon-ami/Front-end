class Api {

    async getData() {
        // await response of fetch call
        const response = await fetch('http://localhost:8000/Src/Post/read.php');
        // only proceed once promise is resolved
        return await response.json();

    }
}

export default new Api();