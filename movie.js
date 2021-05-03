function movieObject(title, rating) {
    this.title = title;
    this.rating = rating;
    this.isValid = function () {
      let x = document.getElementById("name").value;
      if ((this.title != null) && (this.rating >= 1) && (this.rating <= 5)){
        return true
      }
      else{ 
        return false;
      }
    };
    
    this.getAll = function() {
      return "Movie: " + this.title   + ", Rating: " + this.rating;
    };
  }
  