const API_KEY = ''
const submit_button = document.querySelector('#submit-button');
const Input = document.querySelector('input');
const imageSection = document.querySelector('.images-section')



const getImages = async ()=>{
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            prompt: Input.value,
            n: 4,
            size:"1024x1024"
        })
    }

try{
    const response = await fetch('https://api.openai.com/v1/images/generations',options)
    const data = await response.json()

    data?.data.forEach(image =>{ 
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageTag = document.createElement('img')
        imageTag.setAttribute('src', image.url)
        imageContainer.append(imageTag)
        imageSection.append(imageContainer)
    })
   }catch (err)
   {
      console.error(err)
   }
}

submit_button.addEventListener('click', getImages)