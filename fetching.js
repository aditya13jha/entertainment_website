let movie={

	
    fetchMovie: function (name) {
        fetch('https://imdb8.p.rapidapi.com/auto-complete?q='+name,{
        "method": 'GET',
        // "headers": {
        //       // 'X-RapidAPI-Key': '7b3257bdc6msh51f859c23f189d4p173d67jsncd2d577c457d',
        //       //  'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        //     }
        })
        
          .then((response) => {
            if (!response.ok) {
              alert("No movies found.");
              throw new Error("No movies found.");
            }
            return response.json();
          })
          .then((data) => this.displayMovie(data));
      },

      displayMovie: function (data) {

        document.querySelector("#newww").innerText = "SEARCH RESULTS FOR";

            const list=data.d[0];
            const name=list.l;
            const poster=list.i.imageUrl;
            document.querySelector('#titlemov1').innerText=name;
            document.querySelector('#imgmov1').src=poster;
        
            const list1=data.d[1];
            const name1=list1.l;
            const poster1=list1.i.imageUrl;
            document.querySelector('#titlemov2').innerText=name1;
            document.querySelector('#imgmov2').src=poster1;

            const list2=data.d[2];
            const name2=list2.l;
            const poster2=list2.i.imageUrl;
            document.querySelector('#titlemov3').innerText=name2;
            document.querySelector('#imgmov3').src=poster2;

            const list3=data.d[3];
            const name3=list3.l;
            const poster3=list3.i.imageUrl;
            document.querySelector('#titlemov4').innerText=name3;
            document.querySelector('#imgmov4').src=poster3;

            const list4=data.d[4];
            const name4=list4.l;
            const poster4=list4.i.imageUrl;
            document.querySelector('#titlemov5').innerText=name4;
            document.querySelector('#imgmov5').src=poster4;

            const list5=data.d[5];
            const name5=list5.l;
            const poster5=list5.i.imageUrl;
            document.querySelector('#titlemov6').innerText=name5;
            document.querySelector('#imgmov6').src=poster5;

            const list6=data.d[6];
            const name6=list6.l;
            const poster6=list6.i.imageUrl;
            document.querySelector('#titlemov7').innerText=name6;
            document.querySelector('#imgmov7').src=poster6;
            

            

        
      },
    search: function () {
        this.fetchMovie(document.querySelector(".search-bar").value);
        
      },
  

    };
    
    document.querySelector(".search button").addEventListener("click", function () {
      movie.search();
    });
    
    document
      .querySelector(".search-bar")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          movie.search();
        }
      });
