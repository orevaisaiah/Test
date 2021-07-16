const body = document.querySelector(".container")
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
    .then(users =>{
        //console.log(users)
        users.map(user =>{
            //console.log(user)
            let userId = user.userId;
            let id = user.id;
            let title = user.title;
            let completed = user.completed;

            html = `
                <div class="container-fluid border">
                    <div class="row"
                        <div class="card">
                            <ul class="list-group">
                                <li class="list-group-item">userId: ${userId}</li>
                                <li class="list-group-item">id: ${id}</li>
                                <li class="list-group-item">title: ${title}</li>
                                <li class="list-group-item">completed: ${completed}</li>
                            <ul>
                        </div>
                    </div>
                </div>
            `
            body.innerHTML += html
        })

    })