require 'sinatra' 
require 'json'  
require 'httparty' 


	images = HTTParty.get("https://api.instagram.com/v1/tags/#{search_word}/media/recent?client_id=a0553208d1d54032842781cb526dc6c8")
	# mainImage = images["response"]["data"][0]["images"]["thumbnail"]["url"]
	images.to_json
	end

  url = URI.encode("http://www.omdbapi.com/?t=#{params[:movie_title]}")  #this makes a url with the movie title and will replace spaces and bad characters that cant be in urls 
  movie = HTTParty.get(url) # this makes the API request using a gem and the url.


	images = HTTParty.post("http://127.0.0.1:4567/contacts")
  "http://127.0.0.1:4567/contacts"
   "http://127.0.0.1:4567/contacts/1"

 

