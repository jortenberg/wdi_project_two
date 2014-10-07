require 'pry'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'


work = Category.create(name: "work")

Contact.create(name: "Magoo Smith", age: 39, address: "29 Dadster Street, Lynbrook, NY 11739", phone_number: "917-486-7342", picture: "img/avatar.png", category_id: work.id)

#<Category id: 5, name: "friends">, #<Category id: 6, name: "family">, #<Category id: 7, name: "work">]