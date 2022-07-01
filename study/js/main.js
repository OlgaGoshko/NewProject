function getData(){
   const $postItem = document.querySelector('#post-item')
   const $userItem = document.querySelector('#user-item')
   const $photoItem = document.querySelector('#photo-item')

   const $pageRoot = document.querySelector('#render-data')

   return {
      init(){
         $postItem.addEventListener('click', this. getPosts)
         $userItem.addEventListener('click', this. getUsers)
         $photoItem.addEventListener('click', this. getPhoto)
      },
      getPosts(event){
         event.preventDefault()
         fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then( data => {

            $pageRoot.innerHTML = ''

            for (let post of data){
               $pageRoot.insertAdjacentHTML('afterbegin', `
               <article class="article">
                  <h3 class="articlr__title">${post.title}</h3>
                  <p class="article__body">${post.body}</p>
               </article>
               `)
            }
           
         } )
      },
      getUsers(event){
         event.preventDefault()
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then( data => {

            $pageRoot.innerHTML = ''

            for (let user of data){
               $pageRoot.insertAdjacentHTML('afterbegin', `
               <article class="article">
                  <h3 class="articlr__title">${user.name}</h3>
                  <p class="article__body">${user.email}</p>
               </article>
               `)
            }
           
         } )
      },
      getPhoto(event){
         event.preventDefault()
         event.preventDefault()
         fetch('https://jsonplaceholder.typicode.com/photos')
         .then(response => response.json())
         .then( data => {

            $pageRoot.innerHTML = ''

            for (let photo of data){
               $pageRoot.insertAdjacentHTML('afterbegin', `
               <article class="article">
                  <h3 class="articlr__title">${photo.title}</h3>
                  <p class="article__body">$
                     <img src="${photo.url}">
                  </p>
               </article>
               `)
            }
           
         } )
      },
   }
}

getData().init()