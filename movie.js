  
function movieObject(title, rating) 
{
  this.name = title,
  this.rating = rating,
  this.isValid = function() 
  {
    if (this.name != "" && this.rating >= 1 && this.rating <= 5)
    {
      return true;
    }
  };
  this.getAll = function()
  {
    return this.name + " (" + this.rating + " out of 5)";
  };
}