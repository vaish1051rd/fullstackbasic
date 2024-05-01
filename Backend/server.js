import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

//get a list of 5 jokes

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id: 1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id: 2,
            title:'2nd joke',
            content:'This is 2nd joke'
        },
        {
            id: 3,
            title:'A joke',
            content:'This is 3rd joke'
        },
        {
            id: 4,
            title:'A joke',
            content:'This is 4rth joke'
        },
        {
            id: 5,
            title:'A joke',
            content:'This is 5th joke'
        },
    ];
    res.send(jokes);
    //to read these from site page professionally go to json formatter site
});

const port = process.env.PORT || 3000;
// port environment variables se bhi ata h ya hardcoded bhi le skte h, i.e here process.env.port matlb ya toh environmnt variables se lelo ya OR(||) lga ke hardcore port likh do
// lekin jb production me jati h chize h to 100% port process.env se hi milega otherwise app run nhi hogi

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});