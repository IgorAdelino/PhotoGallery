const baseURL = "https://api.pexels.com/v1/";
const divPaiImages = document.getElementById('lugar-imagens')

let index = 1
let numeroDeImagens = 15

async function getAllPhotos() {
  limparDivPai()
  const response = await fetch(`${baseURL}/curated?page=${index}&per_page=${numeroDeImagens}`, {
    headers: {
      Authorization: "lpkJcRScEAEWCVBWFX3Rx9eZCL5DY6tLrtJCailKesZ86v1Jdxu5o8cf",
    },
  });
  const data = await response.json();
  for(const item of data.photos){
    buildImage(item)
  }
  console.log(typeof(data))

}
getAllPhotos()

function buildImage(item){
    const urlImg = item.src.tiny
    const divImg = document.createElement('img')
    divImg.setAttribute('src', urlImg)
    divPaiImages.appendChild(divImg)
}
function limparDivPai(){
  divPaiImages.innerHTML=''
}

function changePage(button){
  if(button ==='proximo'){
    // console.log('Usuario quer ir para a proxima')
    index+=1
    console.log(index)
    getAllPhotos()
    
  }
  if(button === 'voltar' && index>1){
    
    index-=1
    console.log(index)
    getAllPhotos()
  }
  
}

