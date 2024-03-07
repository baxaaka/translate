const box1 = document.querySelector(".box-1")
const box2 = document.querySelector(".box-2")


const postFunction = async (e) => {
    try {
        e.preventDefault(); 

        let inputValue = box1.value; 

        const result = await fetch("http://localhost:9090/api/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: inputValue,
            })
        });

        const data = await result.json();
        console.log(data.data);

        box2.innerHTML = data.data;
    } catch (error) {
        console.log(error.message);
    }

}


box1.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.key === "Enter"){
        postFunction(e);
    }
})

// setInterval(postFunction, 2000)

// document.querySelector("form").addEventListener("submit", postFunction);

