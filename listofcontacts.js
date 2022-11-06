var app = express();

/*const contacts = [
    "sara",
    "nilofar",
    "faatima",
    "zoya"
];*/

var users = [
    {
        userName:"Sara"
    }
    {
        userName:"Nilofar"
    }
]
function generateList(arg){
    let items = " ";
    for(let i = 0; i<arg.length; i++){
        items += '<li>${arg[i]}</li> ';
    }
    return items;
}
app.set('view engine', 'ejs');
app.get('frmSignUp', function(request, response){
        users.push(
        {
            userName: request.query["userName"]
        }

    );
    response.render('contacts.ejs', {contacts: contacts});
}
);
//document.querySelector("main").innerHTML = '<ol> ${generateList(contacts)} </ol>';