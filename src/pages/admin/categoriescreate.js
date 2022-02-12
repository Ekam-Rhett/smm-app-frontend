async function getCategories() {
    
    // const element = <h1>{json.categories}</h1>;
    try {
        const request = await fetch("http://localhost:12346/api/admin/create", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authToken:")
            }
        });
        const response = await request.json();
        if (response.error) {
            window.location.href='/admin'
        } else {
            
            // ReactDOM.render(element, document.getElementById('root1'));
            // Use response information to render all categories
        }
    } catch (err) {
        console.error(err);
        // error handling here
    }
}