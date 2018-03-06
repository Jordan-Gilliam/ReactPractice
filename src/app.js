console.log("APP.js is running")

const app = {
    title: 'indecision app',
    subtitle: 'this is some info',
    options: ['One', 'Two']
};



const template = (
    <div>
     <h1>{app.title}</h1> 
     {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
     <ol>
        <li>{app.items}</li>
        <li>{app.items}</li>
     </ol>
    </div>
);

const user = {
    name: 'jordan',
    age: 24,
    location: 'nyc'
};

function getLocation(location) {
    if (location) {
        return <p>location:  {location}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);