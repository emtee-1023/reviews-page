fetch('./data/reveiws.json')
    .then(res=>{
        return res.json()
            .then(data=>{
                data.forEach(review => {
                    const html = `
                                <div class="review ${review.class}">
                        
                                    <div class="identity">
                                    <div class="pfp">
                                        <img src="${review.photo}">
                                    </div>
                                    
                                    <div class="details">
                                        <h2>${review.name}</h2>
                                        <p class="level">${review.level}</p>
                                    </div>
                                    </div>
                        
                                    <div class="comment">
                                    <p>${review.comment}</p>
                                    </div>
                                </div>
                                `
                    
                    document.querySelector('.reviews').insertAdjacentHTML('beforeend',html);
                });
            })
    })