const todolist = document.getElementById("todolist");
const donelist = document.getElementById("donelist");

const form = document.getElementById("newTaskForm");
const input = document.getElementById("newTask");

const firebaseConfig = {
    apiKey: "AIzaSyAz0g2bvY5ANzcrij5BLYrIQEKYgyQozSM",
    authDomain: "fir-firestore-3ff16.firebaseapp.com",
    projectId: "fir-firestore-3ff16",
    storageBucket: "fir-firestore-3ff16.appspot.com",
    messagingSenderId: "585109058429",
    appId: "1:585109058429:web:b81040041c05b55385d214"
};

const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

db.collection("tasks").where('status', '!=', 'done') .onSnapshot((querySnapshot) => {
    let li_str = "";
    querySnapshot.forEach((doc) => {
        let task = doc.data()
        console.log(doc.data());
        li_str += "<li>"
        li_str += "<a href=\"javascript:updateTask('" 
        li_str += doc.id + "')\"> Terminado </a>"
        li_str += task.title + "</li>";
    })
    todolist.innerHTML = li_str;
})

db.collection("tasks").where('status', '==', 'done') .onSnapshot((querySnapshot) => {
    let li_str = "";
    querySnapshot.forEach((doc) => {
        let task = doc.data()
        console.log(doc.data());
        li_str += "<li style='text-decoration: line-through;'>" + task.title + "</li>";
    })
    donelist.innerHTML = li_str;
})


form.addEventListener("submit", function(event){
    event.preventDefault();

    db.collection("tasks").add({
        "title": input.value,
        "status": "Created"
    }).then((docRef) => {
        console.log("Document created with id: " + docRef.id)
    }).catch((error)=>{
        console.log("Error: " + error)
    });

    return false;
})


function updateTask(id) {
    db.collection('tasks').doc(id).update({
        "status": "done"
    })
}