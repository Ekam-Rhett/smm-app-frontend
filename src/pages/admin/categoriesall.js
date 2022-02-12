import React from 'react';
import ReactDOM from 'react-dom';

async function getCategories() {
    try {

        const title = React.createElement('h1', {}, 'My First React Code');
        
        const request = await fetch("http://localhost:12346/api/admin/all");
        const response = await request.json();
        if (response.error) {
            ReactDOM.render(
                title,
                document.getElementById('root1')
              );
        } else {
            ReactDOM.render(
                title,
                document.getElementById('root1')
              );
            // Use response information to render all categories
        }
    } catch (err) {
        console.error(err);
        // error handling here
    }
}

function CategoriesAll() {
    getCategories()
    return (
     <div>FAQS</div>
    )
};
  
  export default CategoriesAll;