// const apiLink = 'http://hp-api.herokuapp.com/api/characters'

//elements

const input__box = document.getElementById('input__box')
const map__area = document.getElementById('map__area')
let datas = []
console.log(datas)

// event listener

input__box.addEventListener('keyup',(e)=>{
            console.log(e.target.value)
            const typed = e.target.value

          //filter
       const result = datas.filter(res=>{
              return res.name.toLowerCase().includes(typed) || res.house.toLowerCase().includes(typed)
          
          })

          console.log(result)

          //display searched characters
          allCharacters(result)
})

const api = async ()=>{
         
          try{
                    const fetched = await fetch('http://hp-api.herokuapp.com/api/characters')
         console.log(fetched.url)
         console.log('ran')

        datas = await fetched.json()
        console.log(datas)

        allCharacters(datas)

          }
          catch(err){
                    console.error(err)
          }
            
}

// mapped data function

const allCharacters = (datas)=>{

          map__area.innerHTML = datas.map(data=>(
                    `<div class='name__house__image'>
                    <p>name : ${data.name}</p>
                    <div class="images">
                         <img src="${data.image}" />
                    </div>
                    <p>house : ${data.house}</p>
                    </div>
                    `
          ))
}

api()
